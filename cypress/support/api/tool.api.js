import { AdminApiClient } from "./adminApiClient";

export class ExternalToolApi {
	static createExternalTool = async (payload) => {
		const response = await new AdminApiClient().post(
			"/admin/tools/external-tools",
			payload
		);

		const externalTools = Cypress.env("external-tools") || [];
		externalTools.push(response.data);

		Cypress.env("external-tools", externalTools);

		return response.data;
	};
}

export class SchoolExternalToolApi {
	static createSchoolExternalTool = async (payload) => {
		const response = await new AdminApiClient().post(
			"/admin/tools/school-external-tools",
			payload
		);

		const schoolExternalTools = Cypress.env("school-external-tools") || [];
		schoolExternalTools.push(response.data);

		Cypress.env("school-external-tools", schoolExternalTools);

		return response.data;
	};
}

export class ContextExternalToolApi {
	static createContextExternalTool = async (payload) => {
		const response = await new AdminApiClient().post(
			"/admin/tools/context-external-tools",
			payload
		);

		return response.data;
	};
}
