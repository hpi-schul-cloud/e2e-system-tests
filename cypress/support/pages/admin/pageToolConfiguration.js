"use strict";

class ToolConfiguration {
	static #contextExternalToolConfiguratorPageTitle =
	'[data-testid="context-external-tool-configurator-title"]';
	static #schoolExternalToolConfigPageTitle =
	'[data-testid="school-external-tool-configurator-title"]';
	static #externalToolConfigInfotext = '[data-testid="tool-configuration-infotext"]';
	static #addExternalToolSaveButton = '[data-testid="save-button"]';
	static #toolConfigurationSelection = '[data-testid="configuration-select"]';
	static #toolConfigurationSelectItem = '[data-testId="configuration-select-item"]';
	static #toolConfigurationSelectedItem = '[data-testid="configuration-selected-item"]';
	static #isDeactivatedCheckBox = '[data-testid="configuration-deactivate-checkbox"]';
	static #toolErrorAlert = '[data-testId="tool-error-alert"]';
	static #toolDisplayNameInputField = '[data-testid="parameter-display-name"]';
	static #protectedParameter = '[data-testid="protected"]';
	static #cancelButton = '[data-testid="cancel-button"]';

	seeExternalToolConfiguratorPage() {
		cy.get(ToolConfiguration.#schoolExternalToolConfigPageTitle).should("be.visible");
	}

	seeContextExternalToolConfiguratorPage() {
		cy.get(ToolConfiguration.#contextExternalToolConfiguratorPageTitle)
		.should("be.visible");
	}

	seeToolConfigurationInfoText() {
		cy.get(ToolConfiguration.#externalToolConfigInfotext).should("be.visible");
	}

	saveExternalToolButton() {
		cy.get(ToolConfiguration.#addExternalToolSaveButton).click();
	}

	addExternalTool(toolName) {
		cy.get(ToolConfiguration.#toolConfigurationSelection).click();
		cy.get(ToolConfiguration.#toolConfigurationSelectItem).contains(toolName).click();
	}

	toolIsNotVisibleInToolSelection(toolName) {
		cy.get(ToolConfiguration.#toolConfigurationSelection).click();
		cy.get(ToolConfiguration.#toolConfigurationSelectItem)
			.contains(toolName)
			.should("not.exist");
	}

	seeSelectedExternalTool(toolName) {
		cy.get(ToolConfiguration.#toolConfigurationSelectedItem).should(
			"contain.text",
			toolName
		);
	}

	insertToolLink(toolLink) {
		cy.get(ToolConfiguration.#toolConfigurationSelection).click().type(toolLink);
		cy.get(ToolConfiguration.#toolConfigurationSelectItem).contains("CY Test Tool OpenStreetMap").click();
	}

	deactivateTool() {
		cy.get(ToolConfiguration.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.check({ force: true });
	}

	activateTool() {
		cy.get(ToolConfiguration.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.uncheck({ force: true });
	}

	seeDeactivatedCheckBoxIsChecked() {
		cy.get(ToolConfiguration.#isDeactivatedCheckBox).should("be.visible");
		cy.get(ToolConfiguration.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.should("be.checked");
	}

	seeDeactivatedCheckBoxIsNotChecked() {
		cy.get(ToolConfiguration.#isDeactivatedCheckBox).should("be.visible");
		cy.get(ToolConfiguration.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.should("not.be.checked");
	}

	seeToolErrorAlert() {
		cy.get(ToolConfiguration.#toolErrorAlert).should("be.visible");
	}

	fillInToolDisplayName(toolName) {
		cy.get(ToolConfiguration.#toolDisplayNameInputField).find("input").clear().type(toolName);
	}

	selectProtectedCustomParameterOption(value) {
		cy.get(ToolConfiguration.#protectedParameter).click();
		cy.get("div").contains(value).click();
	}

	fillInCustomParameter(paramName, value) {
		cy.get(`[data-testid="${paramName}"]`).find("input").clear().type(value);
	}

	seeCustomParameterFormContains(paramName, value) {
		cy.get(`[data-testid="${paramName}"]`).find("input").should("have.value", value);
	}

	clickCancelButton() {
		cy.get(ToolConfiguration.#cancelButton).click({force: true});
	}

}

export default ToolConfiguration;
