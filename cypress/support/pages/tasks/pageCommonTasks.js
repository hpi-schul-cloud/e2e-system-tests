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
    cy.get(Tasks_Common.#tasksOverviewNavigationButton)
      .click()
      .get('[data-testid="upperTaskSection"]')
      .then($elm => {
        expect($elm).to.exist
      })
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
      .get('#homework-form')
      .then($elm => {
        expect($elm).to.exist
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
      .get("[data-testid='taskTitle']")
      .then($elm => {
        expect($elm).to.have.lengthOf.greaterThan(5)
      })
  }

  taskIsVisibleOnTasksOverviewPage (taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.url().should('include', '/tasks')
    cy.contains(taskTitle)
      .should('be.visible')
      .get("[data-testid='taskTitle']")
      .then($elm => {
        let taskTitleRegex = new RegExp(taskTitle)
        let taskTitleString = $elm.text().trim()
        expect(taskTitleString).to.match(taskTitleRegex)
      })
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
      .get("[data-testid='task-details-btn-finish']")
      .then($elm => {
        expect($elm).to.exist
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
