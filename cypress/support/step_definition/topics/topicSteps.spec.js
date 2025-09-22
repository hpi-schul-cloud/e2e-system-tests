const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Topics from "../../pages/topics/pageTopics";

const topics = new Topics();

Then("I see the dialog for copying topic alert", () => {
	topics.seeCopyAlertDialog();
});

Then("I see information in the dialog that GeoGebra was not copied", () => {
	topics.seeGeoGebraNotCopiedInfoInDialog();
});

Then("I see information in the dialog that the Etherpad content was not copied", () => {
	topics.seeEtherpadNotCopiedInfoInDialog();
});

When("I click the button Close in the dialog", () => {
	topics.clickCloseButtonInDialog();
});

Then(
	"I see the topic title {string} with the suffix {string} on the course detail page",
	(topicName, suffix) => {
		topics.seeCopiedTopicTitleOnCourseDetailPage(topicName, suffix);
	}
);

Then(
	"I see the topic title {string} with the suffix {string} on the topic detail page",
	(topicName, suffix) => {
		topics.seeCopiedTopicTitleOnTopicDetailPage(topicName, suffix);
	}
);

Then("I see the Publish button on the copied topic", () => {
	topics.seePublishButtonOnCopiedTopic();
});

When("I click on the copied topic {string}", (topicName) => {
	topics.clickOnCopiedTopic(topicName);
});

Then("I see the topic details page", () => {
	topics.seeTopicDetailsPage();
});

Then("I see the element Text {string} on the topic detail page", (expectedText) => {
	topics.seeTextElementOnTopicDetailPage(expectedText);
});

Then("I see the element Lernstore {string} on the topic detail page", (expectedText) => {
	topics.seeLernstoreElementOnTopicDetailPage(expectedText);
});

Then("I see the element Etherpad {string} on the topic detail page", (expectedText) => {
	topics.seeEtherpadElementOnTopicDetailPage(expectedText);
});

Then("I can see edit topic page {string}", (topicTitle) => {
	topics.seeEditTopicPage(topicTitle);
});

When("I enter topic title {string}", (topicTitle) => {
	topics.enterTopicTitle(topicTitle);
});

When("I click on button Add Text to topic", () => {
	topics.clickOnAddTextToTopic();
});

When("I click on button Add GeoGebra to topic", () => {
	topics.clickOnAddGeoGebraToTopic();
});

When("I click on button Add Learning Material to topic", () => {
	topics.clickOnAddLearningMaterialToTopic();
});

When("I click on button Add Etherpad to topic", () => {
	topics.clickOnAddEtherpadToTopic();
});

When("I click on button Add Task to topic", () => {
	topics.clickOnAddTaskToTopic();
});

Then("I can see form element Text on position {string}", (elementPosition) => {
	topics.seeFormElementText(elementPosition);
});

When(
	"I enter title {string} into element Text in element position {string}",
	(elementTextTitle, elementPosition) => {
		topics.enterTitleforElementText(elementTextTitle, elementPosition);
	}
);

When(
	"I enter description {string} into element Text in element position {string}",
	(elementTextDescription, elementPosition) => {
		topics.enterDescriptionforElementText(elementTextDescription, elementPosition);
	}
);

When("I enter title {string} into element GeoGebra", (elementGeoGebraTitle) => {
	topics.enterTitleforElementGeoGebra(elementGeoGebraTitle);
});

When("I enter GeoGebra material ID {string}", (geoGebraMaterialID) => {
	topics.enterIDforElementGeoGebra(geoGebraMaterialID);
});

When(
	"I enter title {string} into element Learning Material",
	(elementLearningMaterialTitle) => {
		topics.enterTitleforElementLearningMaterial(elementLearningMaterialTitle);
	}
);

Then("I see second learning material button in the content area", () => {
	topics.seeAddMaterialBtnInContent();
});

When(
	"I enter title {string} into element Etherpad in element position {string}",
	(elementEtherpadTitle, elementPosition) => {
		topics.enterTitleforElementEtherpad(elementEtherpadTitle, elementPosition);
	}
);

When(
	"I enter description for the ether pad {string} in element position {string}",
	(descriptionEtherpad, elementPosition) => {
		topics.enterDescriptionforElementEtherpad(descriptionEtherpad, elementPosition);
	}
);

When("I enter title {string} into element Task", (elementTaskTitle) => {
	topics.enterTitleforElementTask(elementTaskTitle);
});

When(
	"I enter URL of the task from the another course for task id {string}",
	(elementTaskLink) => {
		topics.enterLinkforElementTask(elementTaskLink);
	}
);

When("I click on create button to create topic", () => {
	topics.clickOnSubmitChangesInTopicBtn();
});

When("I click on save button to save changes", () => {
	topics.clickOnSubmitChangesInTopicBtn();
});

Then(
	"I see topic detail page {string} with content elements {string}, {string}, {string}, {string} and {string}",
	(
		topicTitle,
		contentTitle1,
		contentTitle2,
		contentTitle3,
		contentTitle4,
		contentTitle5
	) => {
		topics.seeTopicDetailPageWithContent(
			topicTitle,
			contentTitle1,
			contentTitle2,
			contentTitle3,
			contentTitle4,
			contentTitle5
		);
	}
);

Then("I see topic detail page {string}", (topicTitle) => {
	topics.seeTopicDetailPage(topicTitle);
});

When("I navigate back to course detail page via breadcrumb menu", () => {
	topics.navigateBackToCourseViaBreadcrumb();
});

When(`I click on icon Pen on topic page`, () => {
	topics.clickIconPen();
});

When(`I click on settings and remove option of element {string}`, (elementPosition) => {
	topics.removeElementFromTopic(elementPosition);
});

Then("I can not see content {string} on current page", (contentText) => {
	topics.seeNoContentOnCurrentPage(contentText);
});

Then("I can see content {string} on topic page", (contentText) => {
	topics.seeNoContentOnTopicPage(contentText);
});

When("I click on button Edit on topic page", () => {
	topics.clickOnButtonEditInTopicPage();
});
