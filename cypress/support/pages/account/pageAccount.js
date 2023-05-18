'use strict'

class Account {
  static #initialsButton = '[data-testid="initials"]'
  static #settingsButton = '[data-testid="settings"]'
  static #email = '[data-testid="user_email"]'
  static #emailReadOnly = '[data-testid="user_email_readonly"]'
  static #languageMenu = '#language-menu'
  static #selectedLanguage = '#selected-language'
  static #listOfAllLanguages = '#available-languages'
  static #germanLanguage = '[data-testid="available-language-de"]'
  static #spanishLanguage = '[data-testid="available-language-es"]'
  static #ukrainianLanguage = '[data-testid="available-language-ua"]'
  static #englishLanguage = '[data-testid="available-language-en"]'
  static #pageTitle = '#page-title'

  static #testAssertionData = {
    german: 'Deutsch',
    spanish: 'Español',
    ukrainian: 'Yкраїнський',
    english: 'English',
    overviewInGerman: 'Übersicht',
    overviewInSpanish: 'Panel',
    overviewInUkrainian: 'Панель керування',
    overviewInEnglish: 'Dashboard'
  }

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

  assertNameInitialsIsVisible () {
    cy.get(Account.#initialsButton).should('be.visible')
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
    cy.get(Account.#languageMenu)
      .should('be.visible')
      .click()
      .then(() => {
        cy.get(Account.#selectedLanguage).should('be.visible')
        cy.get(Account.#listOfAllLanguages).find('li').each($element => {
          cy.get($element).should('have.prop', 'value')
          cy.get($element).should('be.visible')
        })
      })
  }

  changeLanguage (language) {
    if (language === 'german') {
      return this.selectLanguage(
        Account.#germanLanguage,
        Account.#testAssertionData.german
      )
    }

    if (language === 'spanish') {
      return this.selectLanguage(
        Account.#spanishLanguage,
        Account.#testAssertionData.spanish
      )
    }

    if (language === 'ukrainian') {
      return this.selectLanguage(
        Account.#ukrainianLanguage,
        Account.#testAssertionData.ukrainian
      )
    }

    return this.selectLanguage(
      Account.#englishLanguage,
      Account.#testAssertionData.english
    )
  }

  selectLanguage (sel, language) {
    return cy.contains(sel, language)
        .should('be.visible')
        .click()
        .wait(['@alerts_api'])
  }

  assertLanguageUpdate (updatedText) {
    cy.wait(300)
      .get(Account.#pageTitle)
      .invoke('text')
      .should('eq', updatedText)
    cy.get(Account.#pageTitle)
      .invoke('attr', 'data-testid')
      .should('eq', updatedText)
  }

  verifyLanguageChanged (language) {
    if (language === 'german') {
      return this.assertLanguageUpdate(
        Account.#testAssertionData.overviewInGerman
      )
    }

    if (language === 'spanish') {
      return this.assertLanguageUpdate(
        Account.#testAssertionData.overviewInSpanish
      )
    }

    if (language === 'ukrainian') {
      return this.assertLanguageUpdate(
        Account.#testAssertionData.overviewInUkrainian
      )
    }

    return this.assertLanguageUpdate(
      Account.#testAssertionData.overviewInEnglish
    )
  }
}
export default Account
