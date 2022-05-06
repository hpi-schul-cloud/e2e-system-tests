class Dashboard {

  constructor() {
    welcomeMessage = '[data-testid="welcome-section"]';
    dashboardTasksTitle = '[data-testid="dashboard-tasks-title"]';
    dashboardTaskCourseName = '[data-testid="task-course-name"]';
    dashboardTaskName = '[data-testid="task-name"]';
  }

  arriveAtDashboard() {
    cy.url().should("include", "/dashboard");
  }

  seeWelcomeMessage() {
    cy.get(this.welcomeMessage);
    cy.contains("Hallo Cord Carl!")
  }

  seeAssignedTasks() {
    cy.get(this.dashboardTasksTitle).eq(0);
    cy.contains("Gestellte Aufgaben");
    cy.get(this.dashboardTaskCourseName).eq(0);
    cy.contains("Natur");
    cy.get(this.dashboardTaskName).eq(0);
    cy.contains("Test Aufgabe - Copy");
  }

  seeDraftTasks() {
    cy.get(this.dashboardTasksTitle).eq(1);
    cy.contains("Entwürfe");
    cy.get(this.dashboardTaskCourseName).eq(1);
    cy.contains("Test");
    cy.get(this.dashboardTaskName).eq(1);
    cy.contains("Test - Copy");
  }
}
export default Dashboard;
