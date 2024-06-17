import MediaShelf from "../../pages/mediashelf/pageMediaShelf";
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

const mediaShelf = new MediaShelf()

When("I go to media shelf", () => {
	mediaShelf.navigateToMediaShelf();
});

When("I click on delete media line button", () => {
	mediaShelf.clickDeleteMediaLineButton();
});

When("I click on collapse available media line button", () => {
	mediaShelf.clickCollapseAvailableMediaLineButton();
});

When("I click on tree dot menu button on available media line", () => {
	mediaShelf.clickThreeDotMenuButtonOnAvailableMediaLine();
});

When("I select the background color", () => {
	mediaShelf.selectLineColor()
})

When("I click on grid layout button", () => {
	mediaShelf.clickGridLayoutButton()
})

When("I click on list layout button", () => {
	mediaShelf.clickListLayoutButton()
})

When("I click add media line button", () => {
	mediaShelf.clickAddMediaLineButton()
})

When("I click the tree dot menu button on the first media line", () => {
	mediaShelf.clickThreeDotMenuButtonOnMediaLine()
})

When("I click on edit title button", () => {
	mediaShelf.clickEditTitleButton()
})

When("I click the collapse button on the first media line", () => {
	mediaShelf.clickCollapseMediaLineButton()
})

When("I click on color picker button", () => {
	mediaShelf.clickColorPickerButton()
})

When("I edit the title of the first median line to {string}", (title) => {
	mediaShelf.editMediaLineTitlte(title)
})

When("I double click on the title of the first median line", () => {
	mediaShelf.clickOnMediaLineTitle()
})

When("I click on media element {string}", (toolName) => {
	mediaShelf.clickMediaElement(toolName)
})

Then("I see the media shelf page title", () => {
	mediaShelf.seeMediaShelfPageTitle();
});

Then("I see the available media line", () => {
	mediaShelf.seeAvailableMediaLine();
});

Then("I see the first media line", () => {
	mediaShelf.seeMediaLine();
});

Then("I see the first media line has been deleted", () => {
	mediaShelf.seeDeletedMediaLine();
});

Then("I see the first media line with title {string}", (toolName) => {
	mediaShelf.seeMediaLineWithTitle(toolName);
});

Then("I see the media line menu", () => {
	mediaShelf.seeMediaLineMenu();
});

Then("I see the available media line menu", () => {
	mediaShelf.seeAvailableMediaLineMenu();
});

Then("I see the available background colors", () => {
	mediaShelf.seeAvailableBackgroundColors();
});

Then("I see the available media line has background color {string}", (color) => {
	mediaShelf.seeAvailableMediaLineMenuColor(color);
});

Then("I see the first media line has background color {string}", (color) => {
	mediaShelf.seeMediaLineMenuColor(color);
});

Then("I see the available media line is collapsed", () => {
	mediaShelf.isAvailableMediaLineCollapsed();
});

Then("I see the available media line is not collapsed", () => {
	mediaShelf.isAvailableMediaLineNotCollapsed();
});

Then("I see the first media line is collapsed", () => {
	mediaShelf.isMediaLineCollapsed();
});

Then("I see the first media line is not collapsed", () => {
	mediaShelf.isMediaLineNotCollapsed();
});

Then("I see the grid layout", () => {
	mediaShelf.seeGridLayout();
});

Then("I see the list layout", () => {
	mediaShelf.seeListLayout();
});

Then("I see {int} tools in the available media line", (count) => {
	mediaShelf.seeNumberOfMediaInAvailableMediaLine(count);
});

Then("I see {int} tools in the first media line", (count) => {
	mediaShelf.seeNumberOfMediaInMediaLine1(count);
});

Then("I see the thumbnail, title and description of media element {string}", (toolName) => {
	mediaShelf.seeMediaElementDefaultThumbnail(toolName);
	mediaShelf.seeMediaElementTitle(toolName);
	mediaShelf.seeMediaElementDescription(toolName);
});

Then("I see the deactivated chip on media element {string}", (toolName) => {
	mediaShelf.seeMediaElementDeactivatedChip(toolName);
});

Then("I see the not licensed chip on media element {string}", (toolName) => {
	mediaShelf.seeMediaElementNotLicensedChip(toolName);
});

Then("I see the incomplete chip on media element {string}", (toolName) => {
	mediaShelf.seeMediaElementIncompleteChip(toolName);
});

Then("I see tool {string} in the available media line", (toolName) => {
	mediaShelf.mediaElementIsVisibleInAvailableMediaLine(toolName);
});

Then("I do not see tool {string} in the available media line", (toolName) => {
	mediaShelf.mediaElementIsNotVisibleInAvailableMediaLine(toolName);
});

