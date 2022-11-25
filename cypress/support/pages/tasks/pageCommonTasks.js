'use strict'

class Tasks_Common {
  static #tasksOverviewNavigationButton = '[data-testid="Aufgaben"]'
  static #taskForm = '[id="homework-form"]'
  static #submitButton = '[data-testid="submit-task-btn"]'
  static #addTaskButton = '[data-testid="addTask"]'
  static #taskNameInput = '[data-testid="homework-name"]'
  static #homeworkDescription = '[class="ck ck-editor__main"]'
  static #draftTasksTab = '[data-testid="draftTasks"]'
  static #taskCardTitle = '[data-testid="taskTitle"]'
  static #taskMenuDelete = '[data-testid="task-delete"]'
  static #deleteTaskButton = '[data-testid="task-details-btn-delete"]'

  navigateToTasksOverview () {
    cy.visit('/tasks')
    cy.get(Tasks_Common.#tasksOverviewNavigationButton).click()
    cy.wait('@public_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@me_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@roles_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@schools_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@alert_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@tasks_api')
      .its('response.statusCode')
      .should('eq', 200)
    /*.wait([
        '@public_api',
        '@me_api',
        '@roles_api',
        '@schools_api',
        '@alert_api',
        '@tasks_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].response.statusCode).to.equal(200)
        expect(interceptions[3].response.statusCode).to.equal(200)
        expect(interceptions[4].response.statusCode).to.equal(200)
        expect(interceptions[5].response.statusCode).to.equal(200)
        expect(interceptions[5].request.url).to.include('/tasks')
      })*/
    cy.url().should('include', '/tasks')
  }

  clickOnSubmit () {
    cy.get(Tasks_Common.#taskForm)
      .find(Tasks_Common.#submitButton)
      .click()
      .wait(['@alerts_api'])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
    //cy.get(Tasks_Common.#submitButton).should('contain', '').click()
  }

  clickOnAddTask () {
    cy.get(Tasks_Common.#addTaskButton)
      .click()
      .wait(['@alerts_api'])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  seeCreateTaskPage (taskTitle) {
    if (taskTitle === '-') {
      cy.get(Tasks_Common.#taskForm)
        .get(Tasks_Common.#taskNameInput)
        .should('be.empty')
    } else {
      cy.get(Tasks_Common.#taskForm)
        .get(Tasks_Common.#taskNameInput)
        .should('have.value', taskTitle)
    }
  }

  enterTaskTitle (taskTitle) {
    cy.get(Tasks_Common.#taskNameInput).clear()
    cy.get(Tasks_Common.#taskNameInput).type(taskTitle)
  }

  setTaskText (taskText) {
    cy.get(Tasks_Common.#homeworkDescription)
      .find('div > p')
      .clear()
    cy.get(Tasks_Common.#homeworkDescription)
      .find('div > p')
      .type(taskText)
  }

  clickOnTabDraftTasks () {
    cy.get(Tasks_Common.#draftTasksTab)
      .click()
      .wait(['@tasks_api'])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  taskIsVisibleOnTasksOverviewPage (taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.url().should('include', '/tasks')
    cy.contains(taskTitle).should('be.visible')
    cy.wait('@public_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@me_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@roles_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@schools_api')
      .its('response.statusCode')
      .should('eq', 200)
    cy.wait('@tasks_api')
      .its('response.statusCode')
      .should('eq', 200)
  }

  taskIsNotVisibleOnTasksOverviewPage (taskTitle) {
    cy.wait(200)
    cy.contains(taskTitle).should('not.exist')
  }

  openThreeDotMenuForTask (taskTitle) {
    cy.get(Tasks_Common.#taskCardTitle)
      .contains(taskTitle)
      .parent()
      .parent()
      .find('button')
      .click()
  }

  openTaskFromTasksOverview (taskTitle) {
    cy.get(Tasks_Common.#taskCardTitle)
      .contains(taskTitle)
      .click()
      .wait(['@alerts_api'])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  clickDeleteTaskInDotMenu () {
    cy.get(Tasks_Common.#taskMenuDelete).click()
  }

  clickButtonDeleteTask () {
    cy.get(Tasks_Common.#deleteTaskButton).click()
  }
}
export default Tasks_Common
