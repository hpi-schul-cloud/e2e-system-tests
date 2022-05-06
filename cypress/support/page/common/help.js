class Help {

  constructor() {
    this.questionIcon = '.fa-question'
    this.helpSectionInHeader = '[data-testid="Hilfeartikel"]'
    this.sendRequestOrProblemInHeader = '[data-testid="Hilfekontakt"]'
    this.advancedTrainingsInHeader = '[data-testid="Fortbildung"]'
    this.helpSectionInSidebar = '[data-testid="Hilfebereich"]'
    this.helpArticlesInSidebar = '[data-testid="Hilfeartikel"]'
    this.helpContactInSidebar = '[data-testid="Kontakt"]'
    this.advancedTrainingsInSidebar = '[data-testid="Fortbildungen"]'
    this.helpPageTitle = '[id="page-title"]'
    this.helpFirstSteps = '#erste_schritte > .icon-card__content > .h4'
    this.helpLessons = '[id="Unterricht"]'
    this.helpOrganization = '[id="Organisation"]'
    this.helpNutzungshilfen = '[id="nutzungshilfen"]'
    this.helpContactform = 'h2.h4'
  }

  clickQuestionIcon() {
    cy.get(this.questionIcon).click()
  }

  clickHelpSectionInHeader() {
    cy.get(this.helpSectionInHeader).click()
  }

  clickSendRequestOrProblemInHeader() {
    cy.get(this.sendRequestOrProblemInHeader).click()
  }

  clickAdvancedTrainingsInHeader() {
    cy.get(this.advancedTrainingsInHeader).click()
  }

  clickHelpSectionInSidebar() {
    cy.get(this.helpSectionInSidebar).click()
  }

  clickHelpArticlesInSidebar() {
    cy.get(this.helpArticlesInSidebar).eq(0).click()
  }

  clickHelpContactInSidebar() {
    cy.get(this.helpContactInSidebar).click()
  }

  clickAdvancedTrainingsInSidebar() {
    cy.get(this.advancedTrainingsInSidebar).click()
  }

  seeHelpArticlesPage() {
    cy.get(this.helpPageTitle)
    cy.contains("Hilfeartikel")
    cy.get(this.helpFirstSteps)
    cy.contains("Erste Schritte")
    cy.get(this.helpLessons)
    cy.contains("Unterricht")
    cy.get(this.helpOrganization)
    cy.contains("Organisation")
    cy.get(this.helpNutzungshilfen)
    cy.contains("Nutzungshilfen")
  }

  seeHelpContactPage() {
    cy.get(this.helpPageTitle)
    cy.contains("Kontakt")
    cy.get(this.helpContactform)
    cy.contains("Kontaktformular")
  }
}
export default Help;