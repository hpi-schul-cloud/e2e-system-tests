"use strict";

class Topics {
	static #mainContentMain = '[id="main-content"]';
	static #topicTitleInput = '[id="topicTitleInput"]';
	static #addTextBtn = '[data-testid="topic-addcontent-text-btn"]';
	static #addGeoGebraBtn = '[data-testid="topic-addcontent-geogebra-btn"]';
	static #addLearningMaterialBtn = '[data-testid="topic-addcontent-material-btn"]';
	static #addEtherpadBtn = '[data-testid="topic-addcontent-etherpad-btn"]';
	static #addTaskBtn = '[data-testid="topic-addcontent-task-btn"]';
	static #addContentH5pBtn = '[data-testid="topic-addcontent-h5p-btn"]';
	static #createH5pBtn = '[data-testid="topic-h5p-create-btn"]';
	// class is used for cardHeader and cardBlock because the elements are too generic and depend on position of the element, so using data-testid would need much more logic (also in the feature file) and code than using class.
	static #cardHeader = '[class="card-header"]';
	static #cardBlock = '[class="card-block"]';
	static #elementGeoGebraCard = '[data-testid="topic-content-element-geoGebra-1"]';
	static #elementLearningMaterialCard =
		'[data-testid="topic-content-element-resources-2"]';
	static #elementEtherpadCardPos2 = '[data-testid="topic-content-element-Etherpad-2"]';
	static #elementEtherpadCardPos3 = '[data-testid="topic-content-element-Etherpad-3"]';
	static #elementTaskCard = '[data-testid="topic-content-element-internal-4"]';
	static #addLearningMaterialToContentBtn =
		'[data-testid="topic-material-addmaterial-btn"]';
	static #submitChangesInTopicBtn = '[data-testid="topic-submitchanges-btn"]';
	static #elementTextDescriptionTextarea = '[class="ck ck-editor__main"]';
	static #navCourseOverviewLink = '[data-testid="sidebar-courses"]';
	static #titlebar = '[id="titlebar"]';
	static #sectionCourse = '[data-testid="section-topic"]';
	static #breadcrumbBackToCourse = '[data-testid="navigate-to-course-from-topic"]';
	static #penIcon = '[data-testid="edit-icon-pencil"]';
	static #editTopicButton = '[data-testid="topic-button-edit"]';
	static #textElementPos0 = '[data-testid="topic-content-element-text-0"]';
	static #textElementPos4 = '[data-testid="topic-content-element-text-4"]';
	// static #groupSubmissionCheckbox = '[id="teamSubmissions"]'
	// static #draftCheckbox = '[data-testid="private-checkbox"]'

	static #copyAlertDialog = '[data-testid="dialog-content"]';
	static #copytopicDialogWarning = '[data-testid="warning-title"]';
	static #closeButtonInCopyTopicDialog = '[data-testid="dialog-close"]';
	static #topicTitleCourseDetail = '[data-testid="lesson-name-0"]';
	static #publishButtonCopiedTopic = '[data-testid="lesson-card-action-publish-0"]';
	static #topicTitleTopicDetailPage = '[id="page-title"]';
	static #sectionTopic = '[data-testid="section-topic"]';

	seeCopyAlertDialog() {
		cy.get(Topics.#copyAlertDialog).should("be.visible");
	}

	seeGeoGebraNotCopiedInfoInDialog() {
		cy.get(Topics.#copytopicDialogWarning).should("contain.text", "Geogebra IDs");
	}

	seeEtherpadNotCopiedInfoInDialog() {
		cy.get(Topics.#copytopicDialogWarning).should(
			"contain.text",
			"Inhalte aus Etherpads"
		);
	}

	clickCloseButtonInDialog() {
		cy.get(Topics.#closeButtonInCopyTopicDialog).click();
	}

	seeCopiedTopicTitleOnCourseDetailPage(topicName, suffix) {
		cy.get(Topics.#topicTitleCourseDetail).should(
			"contain.text",
			`${topicName} (${suffix})`
		);
	}

	seePublishButtonOnCopiedTopic() {
		cy.get(Topics.#publishButtonCopiedTopic).should("be.visible");
	}

	clickOnCopiedTopic(topicName) {
		cy.contains(Topics.#topicTitleCourseDetail, `${topicName} (1)`).click();
	}

	seeTopicDetailsPage() {
		cy.url().should("match", /courses\/[a-f0-9]+\/topics\/[a-f0-9]+/);
	}

	seeCopiedTopicTitleOnTopicDetailPage(topicName, suffix) {
		cy.get(Topics.#topicTitleTopicDetailPage).should(
			"contain.text",
			`${topicName} (${suffix})`
		);
	}

	seeTextElementOnTopicDetailPage(expectedText) {
		cy.get(Topics.#sectionTopic)
			.should("be.visible")
			.should("contain.text", expectedText);
	}

	seeLernstoreElementOnTopicDetailPage(expectedText) {
		cy.get(Topics.#sectionTopic)
			.should("be.visible")
			.should("contain.text", expectedText);
	}

	seeEtherpadElementOnTopicDetailPage(expectedText) {
		cy.get(Topics.#sectionTopic)
			.should("be.visible")
			.should("contain.text", expectedText);
	}

	seeEditTopicPage(topicTitle) {
		if (topicTitle === "-") {
			cy.get(Topics.#topicTitleInput).should("have.value", "");
		} else {
			cy.get(Topics.#topicTitleInput).should("have.value", topicTitle);
		}
	}

	enterTopicTitle(topicTitle) {
		cy.get(Topics.#topicTitleInput).clear();
		cy.get(Topics.#topicTitleInput).type(topicTitle);
	}

	clickOnAddTextToTopic() {
		cy.get(Topics.#addTextBtn).click();
	}

	clickOnAddGeoGebraToTopic() {
		cy.get(Topics.#addGeoGebraBtn).click();
	}

	clickOnAddLearningMaterialToTopic() {
		cy.get(Topics.#addLearningMaterialBtn).click();
	}

	clickOnAddEtherpadToTopic() {
		cy.get(Topics.#addEtherpadBtn).click();
	}

	clickOnAddTaskToTopic() {
		cy.get(Topics.#addTaskBtn).click();
	}

	clickOnAddContentH5PToTopic() {
		cy.get(Topics.#addContentH5pBtn).click();
	}

	seeCreateH5PInTopic() {
		cy.get(Topics.#createH5pBtn).should("exist").click();
	}

	clickOnSubmitChangesInTopicBtn() {
		cy.get(Topics.#submitChangesInTopicBtn).click();
	}

	seeFormElementText(textElementPosition) {
		if (textElementPosition === "0") {
			cy.get(Topics.#textElementPos0).should("exist");
		} else if (textElementPosition === "4") {
			cy.get(Topics.#textElementPos4).should("exist");
		}
	}

	enterTitleforElementText(elementTextTitle, elementPosition) {
		if (elementPosition === "0") {
			cy.get(Topics.#textElementPos0).within(() => {
				cy.get(Topics.#cardHeader)
					.find("div > input")
					.eq(0)
					.type(elementTextTitle);
			});
		} else if (elementPosition === "4") {
			cy.get(Topics.#textElementPos4).within(() => {
				cy.get(Topics.#cardHeader)
					.find("div > input")
					.eq(0)
					.type(elementTextTitle);
			});
		}
	}

	enterDescriptionforElementText(elementTextDescription, elementPosition) {
		if (elementPosition === "0") {
			cy.get(Topics.#textElementPos0).within(() => {
				cy.get(Topics.#elementTextDescriptionTextarea)
					.find("div > p")
					.clear()
					.type(elementTextDescription);
			});
		} else if (elementPosition === "4") {
			cy.get(Topics.#textElementPos4).within(() => {
				cy.get(Topics.#elementTextDescriptionTextarea)
					.find("div > p")
					.clear()
					.type(elementTextDescription);
			});
		}
	}

	enterTitleforElementGeoGebra(elementGeoGebraTitle) {
		cy.get(Topics.#elementGeoGebraCard).within(() => {
			cy.get(Topics.#cardHeader)
				.find("div > input")
				.eq(0)
				.type(elementGeoGebraTitle);
		});
	}

	enterIDforElementGeoGebra(geoGebraMaterialID) {
		cy.get(Topics.#elementGeoGebraCard).within(() => {
			cy.get(Topics.#cardBlock).find("div > input").type(geoGebraMaterialID);
		});
	}

	enterTitleforElementLearningMaterial(elementLearningMaterialTitle) {
		cy.get(Topics.#elementLearningMaterialCard).within(() => {
			cy.get(Topics.#cardHeader)
				.find("div > input")
				.eq(0)
				.type(elementLearningMaterialTitle);
		});
	}

	seeAddMaterialBtnInContent() {
		cy.get(Topics.#elementLearningMaterialCard).within(() => {
			cy.get(Topics.#addLearningMaterialToContentBtn).should("be.visible");
		});
	}

	enterTitleforElementEtherpad(elementEtherpadTitle, elementPosition) {
		if (elementPosition === "2") {
			cy.get(Topics.#elementEtherpadCardPos2).within(() => {
				cy.get(Topics.#cardHeader)
					.find("div > input")
					.eq(0)
					.clear()
					.type(elementEtherpadTitle);
			});
		} else if (elementPosition === "3") {
			cy.get(Topics.#elementEtherpadCardPos3).within(() => {
				cy.get(Topics.#cardHeader)
					.find("div > input")
					.eq(0)
					.clear()
					.type(elementEtherpadTitle);
			});
		}
	}

	enterDescriptionforElementEtherpad(elementEtherpadDescription, elementPosition) {
		if (elementPosition === "2") {
			cy.get(Topics.#elementEtherpadCardPos2).within(() => {
				cy.get(Topics.#cardBlock)
					.find("textarea")
					.clear()
					.type(elementEtherpadDescription);
			});
		} else if (elementPosition === "3") {
			cy.get(Topics.#elementEtherpadCardPos3).within(() => {
				cy.get(Topics.#cardBlock)
					.find("textarea")
					.clear()
					.type(elementEtherpadDescription);
			});
		}
	}

	enterTitleforElementTask(elementEtherpadTask) {
		cy.get(Topics.#elementTaskCard).within(() => {
			cy.get(Topics.#cardHeader)
				.find("div > input")
				.eq(0)
				.type(elementEtherpadTask);
		});
	}

	enterLinkforElementTask(taskId) {
		const env = Cypress.env("BRB").toLowerCase().replace(/\/$/, "");
		const taskURL = `${env}/homework/${taskId}`;
		cy.get(Topics.#elementTaskCard).within(() => {
			cy.get(Topics.#cardBlock).find("input").type(taskURL);
		});
	}

	seeTopicDetailPageWithContent(
		topicTitle,
		contentTitle1,
		contentTitle2,
		contentTitle3,
		contentTitle4,
		contentTitle5
	) {
		cy.get(Topics.#navCourseOverviewLink).should("have.class", "active");
		cy.get(Topics.#titlebar).should("contain", topicTitle);
		cy.get(Topics.#sectionCourse).within(() => {
			cy.get("h2").should("contain", contentTitle1);
			cy.get("h2").should("contain", contentTitle2);
			cy.get("h2").should("contain", contentTitle3);
			cy.get("h2").should("contain", contentTitle4);
			cy.get("h2").should("contain", contentTitle5);
		});
	}

	seeTopicDetailPage(topicTitle) {
		cy.get(Topics.#navCourseOverviewLink).should("have.class", "active");
		cy.get(Topics.#titlebar).should("contain", topicTitle);
	}

	navigateBackToCourseViaBreadcrumb() {
		cy.get(Topics.#breadcrumbBackToCourse).click();
	}

	clickIconPen() {
		cy.get(Topics.#mainContentMain).find(Topics.#penIcon).click();
	}

	removeElementFromTopic(elementPosition) {
		// this is a special case with dynamic data-testid including the position of the elements.
		// That's why data-testids are concatinated in this method.
		let nameOfElementId =
			"[data-testid='topic-dropdown-toggle-element-" + elementPosition + "']";
		let nameOfRemoveElementId =
			"[data-testid='topic-dropdown-option-delete-" + elementPosition + "']";
		cy.get(nameOfElementId).click();
		cy.get(nameOfRemoveElementId).click();
	}

	seeNoContentOnCurrentPage(contentTitle) {
		cy.contains(contentTitle).should("not.exist");
	}

	seeNoContentOnTopicPage(contentText) {
		cy.url().should("include", "/courses/");
		cy.contains(contentText).should("be.visible");
	}

	clickOnButtonEditInTopicPage() {
		cy.get(Topics.#editTopicButton).click();
	}
}
export default Topics;
