'use strict'

class Account {
  static #initialsButton = '[data-testid="initials"]'
  static #settingsButton = '[data-testid="settings"]'

  static #email = '[data-testid="user_email"]'
  static #emailReadOnly = '[data-testid="user_email_readonly"]'

  navigateToAccountSettingsSection () {
    cy.get(Account.#initialsButton).click()
    cy.get(Account.#settingsButton).click()
    cy.url().should('include', '/account')
  }

  verifyEmailEditable (isEditable) {
    if (isEditable) {
      cy.get(Account.#email).should('be.visible')
      cy.get(Account.#email).should('not.have.attr', 'readonly')
    } else {
      cy.get(Account.#emailReadOnly).should('be.visible')
      cy.get(Account.#emailReadOnly).should('have.attr', 'readonly')
    }
  }

  nameInitialsIsVisible () {
    cy.get('[data-testid="initials"]').should('be.visible')
  }

  clickInitialsOfName () {
    cy.get(Account.#initialsButton)
      .should('be.visible')
      .then($btn => {
        if ($btn.is(':disabled')) {
          cy.log('Button exists and is disabled!')
          return
        } else {
          cy.log('Button exists and is enabled!')
          cy.wrap($btn).click()
        }
      })
  }

  clickLanguagesDropDownMenu () {
    cy.get('#language-menu')
      .should('be.visible')
      .click()
      .then(() => {
        cy.get('#selected-language').should('be.visible')
        cy.get('.dropdown-submenu >  ul a').each($element => {
          cy.get($element).should('be.visible')
        })
      })
  }

  changeLanguage (language) {
    if (language === 'english') {
      cy.contains('[data-testid="available-language-en"]', 'English')
        .should('be.visible')
        .click()
        .wait(500)
    } else if (language === 'spanish') {
      cy.contains('[data-testid="available-language-es"]', 'Español')
        .should('be.visible')
        .click()
        .wait(500)
    } else if (language === 'ukrainian') {
      cy.contains('[data-testid="available-language-ua"]', 'Yкраїнський')
        .should('be.visible')
        .click()
        .wait(500)
    } else {
      cy.get('#selected-language').invoke('text').should('eq', 'Deutsch')
      cy.get('#selected-language')
        .invoke('attr', 'data-testid')
        .should('eq', 'selected-language-de')
    }
  }

  verifyLanguageChanged (language) {
    if (language === 'english') {
      cy.get('#page-title').invoke('text').should('eq', 'Dashboard')
      cy.get('#page-title')
        .invoke('attr', 'data-testid')
        .should('eq', 'Dashboard')
    } else if (language === 'spanish') {
      cy.get('#page-title').invoke('text').should('eq', 'Panel')
      cy.get('#page-title').invoke('attr', 'data-testid').should('eq', 'Panel')
    } else if (language === 'ukrainian') {
      cy.get('#page-title').invoke('text').should('eq', 'Панель керування')
      cy.get('#page-title')
        .invoke('attr', 'data-testid')
        .should('eq', 'Панель керування')
    } else {
      cy.get('#page-title').invoke('text').should('eq', 'Übersicht')
      cy.get('#page-title')
        .invoke('attr', 'data-testid')
        .should('eq', 'Übersicht')
    }
  }
}
export default Account
