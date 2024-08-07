const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const {
	ExternalToolApi,
	SchoolExternalToolApi,
	ContextExternalToolApi,
} = require("../../api/tool.api");

const getUniqueToolName = (toolName) => {
	const testId = Cypress.env("testId");

	return `${toolName}-${testId}`;
};

const getExternalTool = (toolName) => {
	const externalTools = Cypress.env("external-tools");
	const externalTool = externalTools.find(
		(tool) => tool.name === getUniqueToolName(toolName)
	);

	if (!externalTool) {
		throw new Error(`External tool ${toolName} does not exist`);
	}

	return externalTool;
};

const getSchoolExternalTool = (toolId, schoolId) => {
	const schoolExternalTools = Cypress.env("school-external-tools");
	const schoolExternalTool = schoolExternalTools.find(
		(tool) => tool.toolId === toolId && tool.schoolId === schoolId
	);

	if (!schoolExternalTool) {
		throw new Error(`School external tool for ${toolId} does not exist`);
	}

	return schoolExternalTool;
};

Given("I have an external tool {string}", (toolName) => {
	cy.wrap(null).then(async () => {
		await ExternalToolApi.createExternalTool({
			name: getUniqueToolName(toolName),
			parameters: [
				{
					name: "course_key",
					displayName: "User Friendly Name",
					description: "This is a parameter.",
					isOptional: false,
					isProtected: false,
					type: "string",
					location: "query",
					scope: "context",
				},
			],
			config: {
				type: "basic",
				baseUrl: "about:blank",
			},
			isHidden: false,
			isDeactivated: false,
			openNewTab: true,
		});
	});
});

Given(
	"I have a school external tool for {string} at school {string}",
	(toolName, schoolId) => {
		/* Requires new login
		const schoolId = Cypress.env("schoolId");
	if (!schoolId) {
		throw new Error(`School id not found`);
	} */

		const externalTool = getExternalTool(toolName);

		cy.wrap(null).then(async () => {
			await SchoolExternalToolApi.createSchoolExternalTool({
				toolId: externalTool.id,
				schoolId: schoolId,
				parameters: [],
				isDeactivated: false,
			});
		});
	}
);

Given(
	"I have a context external tool for {string} in course {string} at school {string}",
	(toolName, courseId, schoolId) => {
		/* Requires new login
		const schoolId = Cypress.env("schoolId");
		if (!schoolId) {
			throw new Error(`School id not found`);
		} */

		const externalTool = getExternalTool(toolName);

		const schoolExternalTool = getSchoolExternalTool(externalTool.id, schoolId);

		cy.wrap(null).then(async () => {
			await ContextExternalToolApi.createContextExternalTool({
				schoolToolId: schoolExternalTool.id,
				contextId: courseId,
				displayName: toolName,
				contextType: "course",
				parameters: [],
			});
		});
	}
);
