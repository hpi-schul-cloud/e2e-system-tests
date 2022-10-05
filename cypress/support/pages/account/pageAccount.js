'use strict'

class Account {

  static #firstName = '[id="fName"]'
  static #lastName = '[id="lName"]'
  static #email = '[id="emailAddress"]'

  compareFirstName(firstName) {
    cy.get(Tasks.#firstName).should('contain', firstname)
  }

  compareLastName(firstName) {
    cy.get(Tasks.#firstName).should('contain', firstname)
  }

  compareEmail(firstName) {
    cy.get(Tasks.#firstName).should('contain', firstname)
  }


}
export default Help