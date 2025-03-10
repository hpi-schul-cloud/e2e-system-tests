const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const { createUser } = require("./scripts/runSchoolApi");
const path = require("path");

async function setupNodeEvents(on, config) {
	const isCI = config.env.environmentName === "ci";
	if (isCI) {
		const environmentFilename = `./env_variables/combined_credentials.json`;
		const settings = require(environmentFilename);
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

	on("task", {
		async loginViaSchoolApi(obj) {
			try {
				return ({ schoolId, username, initialPassword } = await createUser(
					obj.url,
					obj.apiKey,
					obj.schoolId,
					obj.userType
				));
			} catch (error) {
				console.error("Error in calling createUser method:", error);
				throw error;
			}
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
	e2e: {
		specPattern: "cypress/e2e/**/*.feature",
		supportFile: "cypress/support/e2e.js",
		setupNodeEvents,
		// we are using cy.session() in login custom command, which is inheriting the testIsolation properties by default as true and clearing the page (cookies, local storage..etc.) in the test.
		testIsolation: true,
	},
});
