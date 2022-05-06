class Read_News {

  constructor() {
    newsTitleOnDashboard = '[data-testid="title_of_an_element"]';
    teamNewsTag = '#main-content div.tag.tag-default'
    newsTitle = '[id="page-title"]';
    newsText = "#main-content > div.ckcontent";
  }

  goToNewsOnDashboard() {
    cy.get(this.newsTitleOnDashboard).eq(2).click();
    cy.url().should("include", "/news/");
  }

  goToTeamNewsOnDashboard() {
    cy.get(this.teamNewsTag).click();
    cy.url().should("include", "/news/");
  }

  readSchoolNews() {
    cy.get(this.newsTitle);
    cy.contains("Test 123");
    cy.get(this.newsText);
    cy.contains("456 lalala");
  }

  readTeamNews() {
    cy.get(this.newsTitle);
    cy.contains("test");
    cy.get(this.newsText);
    cy.contains("t");
  }
}
export default Read_News;
