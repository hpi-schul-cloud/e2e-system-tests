'use strict'

class Lessons {

  static #createTopicFAB = '[data-testid="fab_button_add_lesson"]'

clickOnNewTopicFAB() {
  cy.get(Lessons.#createTopicFAB).click()
}

seeNewTopicCreationPage() {
  cy.url().should('contians','/topics/add')
}

}
export default Lessons