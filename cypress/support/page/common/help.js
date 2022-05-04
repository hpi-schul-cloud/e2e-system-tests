class Help {
  questionIcon = '.fa-question';
  helpSectionInHeader = '[data-testid="Hilfeartikel"]';
  sendRequestOrProblemInHeader = '[data-testid="Hilfekontakt"]';
  advancedTrainingsInHeader = '[data-testid="Fortbildung"]';
  helpSectionInSidebar = '[data-testid="Hilfebereich"]';
  helpArticlesInSidebar = '[data-testid="Hilfeartikel"]';
  helpContactInSidebar = '[data-testid="Kontakt"]';
  advancedTrainingsInSidebar = '[data-testid="Fortbildungen"]';
  helpPageTitle = '[id="page-title"]';
  helpFirstSteps = '#erste_schritte > .icon-card__content > .h4';
  helpLessons = '[id="Unterricht"]';
  helpOrganization = '[id="Organisation"]';
  helpNutzungshilfen = '[id="nutzungshilfen"]';
  helpContactform = 'h2.h4';

  clickQuestionIcon() {
    cy.get(this.questionIcon).click();
  }

  clickHelpSectionInHeader() {
    cy.get(this.helpSectionInHeader).click();
  }

  clickSendRequestOrProblemInHeader() {
    cy.get(this.sendRequestOrProblemInHeader).click();
  }

  clickAdvancedTrainingsInHeader() {
    cy.get(this.advancedTrainingsInHeader).click();
  }

  clickHelpSectionInSidebar() {
    cy.get(this.helpSectionInSidebar).click();
  }

  clickHelpArticlesInSidebar() {
    cy.get(this.helpArticlesInSidebar).eq(0).click();
  }

  clickHelpContactInSidebar() {
    cy.get(this.helpContactInSidebar).click();
  }

  clickAdvancedTrainingsInSidebar() {
    cy.get(this.advancedTrainingsInSidebar).click();
  }

  seeHelpArticlesPage() {
    cy.get(this.helpPageTitle);
    cy.contains("Hilfeartikel");
    cy.get(this.helpFirstSteps);
    cy.contains("Erste Schritte");
    cy.get(this.helpLessons);
    cy.contains("Unterricht");
    cy.get(this.helpOrganization);
    cy.contains("Organisation");
    cy.get(this.helpNutzungshilfen);
    cy.contains("Nutzungshilfen");
  }

  seeHelpContactPage() {
    cy.get(this.helpPageTitle);
    cy.contains("Kontakt");
    cy.get(this.helpContactform);
    cy.contains("Kontaktformular");
  }
}
export default Help;
