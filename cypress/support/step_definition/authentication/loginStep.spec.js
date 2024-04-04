const { Before, Given } = require("@badeball/cypress-cucumber-preprocessor");

Before(() => {
	cy.intercept("**/public").as("public_api");
	cy.intercept("**/me").as("me_api");
	cy.intercept("**/user/**").as("roles_api");
	cy.intercept("**/school/**").as("school_api");
	cy.intercept("**/dashboard").as("dashboard_api");
	cy.intercept("**/userPermissions?**").as("userPermissions_api");
	cy.intercept("**/classes?**").as("classes_api");
	cy.intercept("**/students?**").as("students_api");
	cy.intercept("**/locales/**").as("locales_api");
	cy.intercept("**/alerts").as("alerts_api");
	cy.intercept("**/alert").as("alert_api");
	cy.intercept("**/tasks**").as("tasks_api");
	cy.intercept("**/tasks/**/finish").as("task_finish_api");
	cy.intercept("**/tasks/**/restore").as("task_restore_api");
	cy.intercept("**/runtime.config.json").as("runtime_config_api");
	cy.intercept("**/board").as("board_api");
	cy.intercept("**/courses?**").as("courses_api");
	cy.intercept("**/homework/**").as("homework_api");
	cy.intercept("**/rooms/**").as("rooms_api");
	cy.intercept("**/delete/**").as("delete_api");
	cy.intercept("**/teams**").as("teams_api");
	cy.intercept("**/courses/**").as("course_api");
	cy.intercept("**/rooms-overview**").as("rooms_overview_api");
	cy.intercept("**/videoconference/event/**").as("videoconference_api");
	cy.intercept("**/news/new").as("news_new_api");
	cy.intercept("**/courses/**").as("courses_api");
	cy.intercept("**/administration/**").as("administration_api");
});

Given("I am logged in as a {string} at {string}", (username, environment) => {
	cy.login(username, environment);
});
