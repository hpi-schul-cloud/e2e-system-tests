const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const { createUser } = require("./scripts/runSchoolApi");
const { waitForFile } = require("./scripts/verifyFile");
const {
	ccFileIsArchive,
	ccCleanUp,
	ccFileHasManifest,
	ccManifestHasOrganization,
	ccOrganizationHasChild,
	ccOrganizationHasWebcontent,
	ccOrganizationHasWeblink,
} = require("./scripts/commonCartridgeValidation");
const path = require("path");
const fs = require("fs");

async function setupNodeEvents(on, config) {
	const isCI = config.env.environmentName === "ci";
	console.log("CWD:", process.cwd());
	console.log("COMBINED_ENV_FILE:", process.env.COMBINED_ENV_FILE);
	console.log("File exists?", fs.existsSync(process.env.COMBINED_ENV_FILE));
	if (isCI) {
		const environmentFilename = path.resolve(
			process.cwd(),
			process.env.COMBINED_ENV_FILE || ""
		);
		console.log("🔍 Looking for env file at:", environmentFilename);
		if (!fs.existsSync(environmentFilename)) {
			throw new Error(`❌ Missing environment file: ${environmentFilename}`);
		}
		const settings = JSON.parse(fs.readFileSync(environmentFilename, "utf-8"));
		if (settings) {
			config.env = {
				...config.env,
				...settings,
			};
		}
	} else {
		const environmentName = config.env.environmentName || "local";
		const environmentFilename = `./env_variables/${environmentName}.env.json`;
		console.log("loading %s", environmentFilename);
		const settings = require(environmentFilename);

		if (settings.env) {
			config.env = {
				...config.env,
				...settings.env,
			};
		}
		console.log("loaded settings for environment %s", environmentName);
	}

	const parallelGroup = config.env.parallelGroup || "";

	config.env.jsonOutput = `logs/${parallelGroup}/json-report.json`;
	config.videosFolder = path.join("cypress", "videos", parallelGroup);
	config.screenshotsFolder = path.join("cypress", "screenshots", parallelGroup);

	// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
	await preprocessor.addCucumberPreprocessorPlugin(on, config);

	on(
		"file:preprocessor",
		webpack({
			webpackOptions: {
				resolve: {
					extensions: [".ts", ".js"],
				},
				module: {
					rules: [
						{
							test: /\.feature$/,
							use: [
								{
									loader: "@badeball/cypress-cucumber-preprocessor/webpack",
									options: config,
								},
							],
						},
					],
				},
			},
		})
	);

	on("before:browser:launch", (browser = {}, launchOptions) => {
		if (browser.family === "chromium" && browser.name !== "electron") {
			launchOptions.args.push("--disable-dev-shm-usage");
			launchOptions.args.push("--no-sandbox");
			launchOptions.args.push("--disable-gpu");
		}
		return launchOptions;
	});

	on("task", {
		async loginViaSchoolApi(obj) {
			try {
				return ({ schoolId, username, initialPassword } = await createUser(
					obj.url,
					obj.apiKey,
					obj.schoolId,
					obj.userType,
					obj.courseId
				));
			} catch (error) {
				console.error("Error in calling createUser method:", error);
				throw error;
			}
		},

		async fileExists({ directory, pattern, renameTo, timeout }) {
			return await waitForFile(directory, pattern, renameTo, timeout);
		},

		async commonCartridgeFileIsArchive({ directory, file }) {
			return await ccFileIsArchive(directory, file);
		},

		async commonCartridgeCleanUp({ directory, file }) {
			return await ccCleanUp(directory, file);
		},

		async commonCartridgeHasManifest({ directory, version, title }) {
			return await ccFileHasManifest(directory, version, title);
		},

		async commonCartridgeHasOrganization({ directory, depth, title }) {
			return await ccManifestHasOrganization(directory, depth, title);
		},

		async commonCartridgeHasChild({ directory, orgId, title }) {
			return await ccOrganizationHasChild(directory, orgId, title);
		},

		async commonCartridgeHasWebcontent({ directory, orgId, pattern }) {
			return await ccOrganizationHasWebcontent(directory, orgId, pattern);
		},

		async commonCartridgeHasWeblink({ directory, orgId, url, title }) {
			return await ccOrganizationHasWeblink(directory, orgId, url, title);
		},
	});

	config.pageLoadTimeout = isCI ? 80000 : 30000;
	config.defaultCommandTimeout = isCI ? 80000 : 20000;
	config.requestTimeout = isCI ? 60000 : 8000;
	config.responseTimeout = isCI ? 60000 : 20000;

	// Make sure to return the config object as it might have been modified by the plugin.
	return config;
}

module.exports = defineConfig({
	viewportWidth: 1500,
	viewportHeight: 768,
	videoCompression: 18,
	video: true,
	chromeWebSecurity: false,
	numTestsKeptInMemory: 0,
	e2e: {
		specPattern: "cypress/e2e/**/*.feature",
		supportFile: "cypress/support/e2e.js",
		setupNodeEvents,
		// we are using cy.session() in login custom command, which is inheriting the testIsolation properties by default as true and clearing the page (cookies, local storage..etc.) in the test.
		testIsolation: true,
	},
});
