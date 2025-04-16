import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Management from "../../pages/admin/pageAdministration";
import ToolConfiguration from "../../pages/admin/pageToolConfiguration";

const management = new Management();
const toolConfiguration = new ToolConfiguration();

Given("the school has external tool {string}", (toolList) => {
	const toolsWithCustomParameter = ["CY Test Tool Required Parameters", "CY Test Tool Optional Parameters"];
	const linkTools = ["CY Test Tool OpenStreetMap"];

	const tools = toolList.split(/\s*,\s*/);

	management.openAdministrationInMenu();
	management.clickOnSchoolAdministrationInSideMenu();
	management.clickExternalToolsPanel();

	tools.forEach((toolName) => {
		cy.wrap(null).then(() => {
			return  management.schoolHasExternalTool(toolName).then((exists) => {
				// if the tool already exists
				if (exists){
					management.clickOnEditButton(toolName);

					if (toolsWithCustomParameter.includes(toolName)) {
						toolConfiguration.fillInCustomParameter("schoolParam", "test");
					}

					toolConfiguration.activateTool()
					toolConfiguration.saveExternalToolButton();
					return;
				}

				// if the tool does not exists
				management.clickAddExternalTool();

				if (linkTools.includes(toolName)) {
					toolConfiguration.insertToolLink("https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823");
				} else if (toolsWithCustomParameter.includes(toolName)) {
					toolConfiguration.addExternalTool(toolName);
					toolConfiguration.fillInCustomParameter("schoolParam", "test");
				} else {
					toolConfiguration.addExternalTool(toolName);
				}

				toolConfiguration.saveExternalToolButton();
				management.seeExternalTool(toolName);
			})
		});
	});
});

Given("all external tools at the school are deleted", () => {
	management.openAdministrationInMenu();
	management.clickOnSchoolAdministrationInSideMenu();
	management.clickExternalToolsPanel();
	management.deleteAllExternalTools();
});
