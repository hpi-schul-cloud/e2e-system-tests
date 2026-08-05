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

	function formatEnvironmentName(value) {
		if (!value) {
			return "Local";
		}
		const normalized = value.toLowerCase();
		const environmentMap = {
			local: "Local",
			ci: "CI",
			dev: "Development",
			localhost: "Local Host",
			staging: "Staging",
			prod: "Production",
			production: "Production",
		};

		return environmentMap[normalized] ?? value;
	}

	function escapeRegex(value) {
		return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	function removeRunInfoCardsByLabels(labels) {
		const reportFile = path.join(htmlReportDir, "index.html");
		let html = fs.readFileSync(reportFile, "utf8");

		const labelRegex = new RegExp(
			`<p class="text-\\[9px\\] text-muted-foreground uppercase font-bold tracking-wider mb-0\\.5">\\s*(${labels
				.map(escapeRegex)
				.join("|")})\\s*<\\/p>`,
			"i"
		);

		const cardBlockRegex =
			/<div class="flex items-center gap-3 min-w-\[\d+px\]">[\s\S]*?<\/div>\s*<\/div>/g;

		html = html.replace(cardBlockRegex, (card) => {
			return labelRegex.test(card) ? "" : card;
		});

		fs.writeFileSync(reportFile, html, "utf8");
	}

	function fixLogoRendering() {
		const files = [path.join(htmlReportDir, "index.html")];
		const featuresDir = path.join(htmlReportDir, "features");

		if (fs.existsSync(featuresDir)) {
			for (const file of fs.readdirSync(featuresDir)) {
				if (file.endsWith(".html")) {
					files.push(path.join(featuresDir, file));
				}
			}
		}

		for (const filePath of files) {
			let html = fs.readFileSync(filePath, "utf8");

			// make logo box a bit wider
			html = html.replace(
				'class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 overflow-hidden"',
				'class="flex h-10 w-24 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 overflow-hidden"'
			);

			// show full logo
			html = html.replace(
				'class="h-full w-full object-cover"',
				'class="h-full w-full object-contain p-1"'
			);

			fs.writeFileSync(filePath, html, "utf8");
		}
	}

	function escapeHtml(value) {
		return String(value ?? "")
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");
	}

	function formatInstanceUrlsCard(brbUrl, nbcUrl) {
		const reportFile = path.join(htmlReportDir, "index.html");
		let html = fs.readFileSync(reportFile, "utf8");

		const block = `
				<div class="mt-1 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-foreground">
					<div>
						<p class="text-[9px] text-muted-foreground uppercase font-bold tracking-wider mb-1">BRB URL</p>
						<p class="font-medium break-all">${escapeHtml(brbUrl)}</p>
					</div>
					<div>
						<p class="text-[9px] text-muted-foreground uppercase font-bold tracking-wider mb-1">NBC URL</p>
						<p class="font-medium break-all">${escapeHtml(nbcUrl)}</p>
					</div>
				</div>`.trim();

		const instanceCardRegex =
			/(<p class="text-\[9px\] text-muted-foreground uppercase font-bold tracking-wider mb-0\.5">\s*Instance URLs\s*<\/p>\s*)<p class="text-sm font-bold text-foreground truncate">[\s\S]*?<\/p>/i;

		html = html.replace(instanceCardRegex, `$1${block}`);

		fs.writeFileSync(reportFile, html, "utf8");
	}

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
		displayChartPercentages: true,
		attachmentLayout: "inline",
		brandLogo: "cypress/fixtures/status-logo-dBC.svg",
		plainDescription: "Schulcloud-Verbund-Software End-to-End Test Framework Report",
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
			environment: formatEnvironmentName(browserData.env.environmentName),
			ciPipeline: `${getWorkflowTrigger()}`,
			buildNumber: process.env.GITHUB_RUN_NUMBER || "Build 1",
			testCycle: process.env.GITHUB_RUN_ID || "Cycle 1",
			"Instance URLs": "rendered as table",
		},
	});
	removeRunInfoCardsByLabels(["Report Version"]);
	fixLogoRendering();
	formatInstanceUrlsCard(
		browserData.env?.BRB ?? "missing",
		browserData.env?.NBC ?? "missing"
	);
}
