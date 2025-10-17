const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Topics from "../../pages/topics/pageTopics";

const topics = new Topics();

Then("I see the dialog for copying topic alert", () => {
	topics.seeCopyAlertDialog();
});

Then("I see the warning section in the dialog box", () => {
	topics.seeCopyWarningInDialog();
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
	"I do not see the topic title {string} with the suffix {string} on the course detail page",
	(topicName, suffix) => {
		topics.doNotSeeCopiedTopicTitleOnCourseDetailPage(topicName, suffix);
	}
);

Then(
	"I see the topic title {string} with the suffix {string} on the topic detail page",
	(topicName, suffix) => {
		topics.seeCopiedTopicTitleOnTopicDetailPage(topicName, suffix);
	}
);

Then("I see the button Publish on the copied topic", () => {
	topics.seePublishButtonOnCopiedTopic();
});

When(
	"I click on the copied topic {string} with the suffix {string} on the course detail page",
	(topicName, suffix) => {
		topics.clickOnCopiedTopic(topicName, suffix);
	}
);

Then("I see the topic details page", () => {
	topics.seeTopicDetailsPage();
});

Then("I see the element Text {string} on the topic detail page", (expectedText) => {
	topics.seeTopicElementNamesOnTopicDetailPage(expectedText);
});

Then(
	"I see the element Learning Store {string} on the topic detail page",
	(expectedText) => {
		topics.seeTopicElementNamesOnTopicDetailPage(expectedText);
	}
);

Then("I see the element Etherpad {string} on the topic detail page", (expectedText) => {
	topics.seeTopicElementNamesOnTopicDetailPage(expectedText);
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
		topics.enterTitleForElementText(elementTextTitle, elementPosition);
	}
);

When(
	"I enter description {string} into element Text in element position {string}",
	(elementTextDescription, elementPosition) => {
		topics.enterDescriptionforElementText(elementTextDescription, elementPosition);
	}
);

When("I enter title {string} into element GeoGebra", (elementGeoGebraTitle) => {
	topics.enterTitleForElementGeoGebra(elementGeoGebraTitle);
});

When("I enter GeoGebra material ID {string}", (geoGebraMaterialID) => {
	topics.enterIDforElementGeoGebra(geoGebraMaterialID);
});

When(
	"I enter title {string} into element Learning Material",
	(elementLearningMaterialTitle) => {
		topics.enterTitleForElementLearningMaterial(elementLearningMaterialTitle);
	}
);

Then("I see second learning material button in the content area", () => {
	topics.seeAddMaterialBtnInContent();
});

When(
	"I enter title {string} into element Etherpad in element position {string}",
	(elementEtherpadTitle, elementPosition) => {
		topics.enterTitleForElementEtherpad(elementEtherpadTitle, elementPosition);
	}
);

When(
	"I enter description for the ether pad {string} in element position {string}",
	(descriptionEtherpad, elementPosition) => {
		topics.enterDescriptionForElementEtherpad(descriptionEtherpad, elementPosition);
	}
);

When("I enter title {string} into element Task", (elementTaskTitle) => {
	topics.enterTitleForElementTask(elementTaskTitle);
});

When(
	"I enter URL of the task from the another course for task id {string} for {string}",
	(elementTaskLink, namespace) => {
		topics.enterLinkForElementTask(elementTaskLink, namespace);
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
