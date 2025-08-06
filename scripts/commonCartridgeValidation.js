const AdmZip = require("adm-zip");
const path = require("path");
const fs = require("fs/promises");
const cheerio = require("cheerio");

const extractDirName = "cc";

function ccFileIsArchive(directory, file) {
	return new Promise((resolve, reject) => {
		try {
			const zip = new AdmZip(path.join(directory, file));
			zip.extractAllTo(path.join(directory, extractDirName), true);
			resolve(true);
		} catch (err) {
			reject(err);
		}
	});
}

function ccFileHasManifest(directory, expectedVersion, expectedTitle) {
	return new Promise(async (resolve, reject) => {
		const manifestPath = path.join(directory, extractDirName, "imsmanifest.xml");
		try {
			const doc = await getManifestDocument(manifestPath);

			const actualVersion = getVersion(doc);
			if (actualVersion !== expectedVersion) {
				throw new Error(
					`Expected version ${expectedVersion} does not match actual version ${actualVersion}`
				);
			}

			const actualTitle = getTitle(doc);
			if (actualTitle !== expectedTitle) {
				throw new Error(
					`Expected title ${expectedTitle} does not match actual title ${actualTitle}`
				);
			}

			resolve(true);
		} catch (err) {
			reject(err);
		}
	});
}

function ccManifestHasOrganization(directory, depth, title) {
	return new Promise(async (resolve, reject) => {
		const manifestPath = path.join(directory, extractDirName, "imsmanifest.xml");

		const doc = await getManifestDocument(manifestPath);
		const itemsPath = getItemsSelector(depth);
		const items = doc(itemsPath)
			.filter((_, el) => getItemTitle(doc, el.attribs["identifier"]) === title)
			.toArray();

		if (items.length > 0) {
			resolve(items[0].attribs["identifier"]);
		} else {
			reject(new Error(`No item with title ${title} found at depth ${depth}`));
		}
	});
}

function ccOrganizationHasChild(directory, orgId, title) {
	return new Promise(async (resolve, reject) => {
		const manifestPath = path.join(directory, extractDirName, "imsmanifest.xml");

		const doc = await getManifestDocument(manifestPath);
		const children = getChildren(doc, orgId);

		const itemsWithTitle = children
			.filter((_, el) => getItemTitle(doc, el.attribs["identifier"]) === title)
			.map((_, el) => el.attribs["identifier"])
			.toArray();

		if (itemsWithTitle.length > 0) {
			resolve(itemsWithTitle[0]);
		} else {
			reject(new Error(`No child with title ${title} found for parent`));
		}
	});
}

function ccOrganizationHasWebcontent(directory, orgId, pattern) {
	return new Promise(async (resolve, reject) => {
		const manifestPath = path.join(directory, extractDirName, "imsmanifest.xml");

		const doc = await getManifestDocument(manifestPath);
		const identifierRef = getItemIdentifierRef(doc, orgId);

		const type = getResourceType(doc, identifierRef);
		if (type !== "webcontent") {
			reject(
				new Error(
					`Type of resource for organization ${orgId} is not webcontent but ${type}`
				)
			);
		}

		const filePath = getFilePath(doc, identifierRef);
		if (!new RegExp(pattern).test(filePath)) {
			reject(
				new Error(
					`Filepath ${filePath} of webcontent does not match expected pattern`
				)
			);
		}

		resolve(true);
	});
}

function ccOrganizationHasWeblink(directory, orgId, url, title) {
	return new Promise(async (resolve, reject) => {
		const manifestPath = path.join(directory, extractDirName, "imsmanifest.xml");

		const doc = await getManifestDocument(manifestPath);
		const identifierRef = getItemIdentifierRef(doc, orgId);

		const type = getResourceType(doc, identifierRef);
		if (type in ["imswl_xmlv1p1", "imswl_xmlv1p3"]) {
			reject(
				new Error(
					`Type of resource for organization ${orgId} is not webcontent but ${type}`
				)
			);
		}

		const filePath = getFilePath(doc, identifierRef);
		const webLinkInfo = await getWebLinkInfo(
			path.join(directory, extractDirName, filePath)
		);
		if (webLinkInfo.url !== url) {
			reject(
				new Error(
					`Actual url ${webLinkInfo.url} does not match expected url ${url}`
				)
			);
		}
		if (webLinkInfo.title !== title) {
			reject(
				new Error(
					`Actual url ${webLinkInfo.title} does not match expected url ${title}`
				)
			);
		}

		resolve(true);
	});
}

function ccCleanUp(directory, fileName) {
	return Promise.all([
		fs.rm(path.join(directory, fileName), {
			recursive: false,
		}),
		fs.rm(path.join(directory, extractDirName), {
			recursive: true,
		}),
	]);
}

// Helper function

async function getManifestDocument(path) {
	const content = await fs.readFile(path);
	const doc = cheerio.load(content, { xml: true });
	return doc;
}

function getChildren(doc, identifier) {
	const children = doc(`item[identifier="${identifier}"]`).children();

	return children;
}

function getItemTitle(doc, identifier) {
	const title = doc(`item[identifier="${identifier}"] > title`).text() ?? '';

	return title;
}

function getItemIdentifierRef(doc, identifier) {
	const identifierRef =
		doc(`item[identifier="${identifier}"]`).attr("identifierref") ?? "";

	return identifierRef;
}

function getFilePath(doc, identifierRef) {
	const path =
		doc(`manifest > resources > resource[identifier="${identifierRef}"] > file`).attr(
			"href"
		) ?? "";
	return path;
}

function getResourceType(doc, identifierRef) {
	const type =
		doc(`manifest > resources > resource[identifier="${identifierRef}"]`)?.attr(
			"type"
		) || "";
	return type;
}

function getVersion(doc) {
	const result = doc("manifest > metadata > schemaversion").text() || undefined;
	return result;
}

function getTitle(doc) {
	const pre = getLomNamespace(doc);
	const result =
		doc(
			`manifest > metadata > ${pre}\\:lom > ${pre}\\:general > ${pre}\\:title > ${pre}\\:string`
		).text() || undefined;

	return result;
}

function getItemsSelector(depth) {
	const rootSelector = "manifest > organizations > organization > item > item";
	const depthSelector = " > item".repeat(depth);
	const selector = `${rootSelector}${depthSelector}`;

	return selector;
}

function getLomNamespace(doc) {
	const lomCC11 = "http://ltsc.ieee.org/xsd/imsccv1p1/LOM/manifest";
	const lomCC13 = "http://ltsc.ieee.org/xsd/imsccv1p3/LOM/manifest";
	const attributes = doc("manifest").attr();
	const map = new Map();
	let result = "";

	Object.keys(attributes).forEach((attributeName) => {
		const attributeValue = attributes[attributeName];
		map.set(attributeValue, attributeName);
	});

	if (map.has(lomCC11)) {
		result = map.get(lomCC11);
	}
	if (map.has(lomCC13)) {
		result = map.get(lomCC13);
	}

	return result.split(":")[1];
}

async function getWebLinkInfo(path) {
	const content = await fs.readFile(path);
	const webLinkDoc = cheerio.load(content, { xml: true });

	const title = webLinkDoc("webLink > title").text();
	const url = webLinkDoc("webLink > url").attr("href");

	return { title, url };
}

module.exports = {
	ccFileIsArchive,
	ccFileHasManifest,
	ccManifestHasOrganization,
	ccOrganizationHasChild,
	ccOrganizationHasWebcontent,
	ccOrganizationHasWeblink,
	ccCleanUp,
};
