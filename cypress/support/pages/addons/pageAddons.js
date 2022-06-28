'use strict'

class Addons {

  static #pageTitle = '[id="page-title"]'

  seeAddonsTitleOnTopOfThePage() {
    cy.get(Addons.#pageTitle).contains('Add-ons')
  }
}
export default Addons