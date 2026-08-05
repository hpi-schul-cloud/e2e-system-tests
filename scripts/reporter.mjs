// const report = require("multiple-cucumber-html-reporter");
// const fs = require("fs");
// const fs_extra = require("fs-extra");
// const path = require("path");

import fs from "fs";
import fsExtra from "fs-extra";
import { generate } from "multiple-cucumber-html-reporter";
import path from "path";

const cucumberJsonDir = path.resolve(process.cwd(), "logs");
const cucumberReportFileMap = {};
const cucumberReportMap = {};
const htmlReportDir = path.resolve(process.cwd(), "reports");
const screenshotsDir = path.resolve(process.cwd(), "cypress/screenshots");

if (!fs.existsSync(screenshotsDir)) {
	fs.mkdirSync(screenshotsDir, { recursive: true });
}

getCucumberReportMaps();
await generateReport();

function getCucumberReportMaps() {
	const files = fsExtra
		.readdirSync(cucumberJsonDir)
		.filter((file) => file.endsWith(".json"));

	files.forEach((file) => {
		const json = JSON.parse(
			fsExtra.readFileSync(path.join(cucumberJsonDir, file), "utf8")
		);

		if (!json[0]) {
			return;
		}

		const [feature] = json[0].uri.split("/").reverse();
		cucumberReportFileMap[feature] = file;
		cucumberReportMap[feature] = json;
	});
}

function getBrowserDetails() {
	return JSON.parse(fs.readFileSync("cypress/fixtures/test-run-details.json", "utf8"));
}

async function generateReport() {
	const browserData = getBrowserDetails();
	const browserMap = (browser) => {
		if (browser.startsWith("electron") || browser.startsWith("chrome")) {
			return "chrome";
		} else if (browser.startsWith("firefox")) {
			return "firefox";
		} else if (browser.startsWith("safari")) {
			return "safari";
		} else if (browser.startsWith("internet explorer")) {
			return "internet explorer";
		}

		return "edge";
	};

	const osMap = (os) => {
		if (os.startsWith("win")) {
			return "windows";
		} else if (os.startsWith("darwin")) {
			return "osx";
		} else if (os.startsWith("linux")) {
			return "linux";
		} else if (os.startsWith("ubuntu")) {
			return "ubuntu";
		} else if (os.startsWith("android")) {
			return "android";
		} else if (os.startsWith("ios")) {
			return "ios";
		}

		return "linux";
	};

	function getWorkflowTrigger() {
		const trigger = process.env.GITHUB_EVENT_NAME;

		const triggerMap = {
			workflow_dispatch: "Manual Workflow",
			schedule: "Scheduled Workflow",
			repository_dispatch: "Remote Workflow",
			push: "Automatic Workflow",
		};

		return triggerMap[trigger] ?? "Local Run";
	}

	console.log(JSON.stringify(browserData, null, 2));

	await generate({
		jsonDir: cucumberJsonDir,
		reportPath: htmlReportDir,
		openReportInBrowser: false,
		saveCollectedJSON: true,
		pageTitle: "dBildungscloud E2E Test Report",
		reportName: `E2E Cucumber Test Report ${browserData.time}`,
		pageFooter: '<div><p className="text-2xl">dBildungscloud 2026</p></div>',
		hideMetadata: false,
		displayReportTime: true,
		durationAggregation: "sum",
		displayDuration: true,
		externalizeMedia: true,
		plainDescription: true,
		displayChartPercentages: false,
		attachmentLayout: "modal",
		metadata: {
			browser: {
				name: browserMap(browserData.browser.name),
				version: browserData.browser.version,
			},
			device: "Local test machine",
			platform: {
				name: osMap(browserData.platform),
			},
		},

		customData: {
			username: process.env.GITHUB_ACTOR ?? "GitHub Actions Runner",
			projectName: "dBildungscloud",
			environment: `${process.env.environmentName || "Local"}`,
			ciPipeline: `${getWorkflowTrigger()}`,
			buildNumber: process.env.GITHUB_RUN_NUMBER,
			BRB: `BRB: ${browserData.env?.BRB ?? "missing"}`,
			NBC: `NBC: ${browserData.env?.NBC ?? "missing"}`,
		},
	});
}
