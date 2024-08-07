import axios from "axios";

class AdminApiClient {
	baseUrl;
	headers = {
		"Content-Type": "application/json",
	};

	constructor(apiVersion = "v1") {
		this.baseUrl = new URL(
			`admin/api/${apiVersion}`,
			Cypress.config("baseUrl")
		).toString();

		const environment = Cypress.env("environment");
		if (environment) {
			const apiKey = Cypress.env(`apiKey-${environment}`);
			this.headers["x-api-key"] = apiKey;
		}
	}

	async post(path, payload) {
		const response = await axios.post(`${this.baseUrl}${path}`, payload, {
			headers: this.headers,
		});

		return response;
	}
}

export { AdminApiClient };
