export function getPageUrl(environment, page) {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const fullLink = new URL(page, env[environmentUpperCased]);

	return fullLink.href;
}
