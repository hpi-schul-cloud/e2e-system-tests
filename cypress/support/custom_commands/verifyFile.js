Cypress.Commands.add('verifyFile', (fileNamePattern, renameTo, timeout) => {
  return cy.task("fileExists", {
    directory: Cypress.config("downloadsFolder"),
    pattern: fileNamePattern,
	renameTo,
    timeout,
  })
});
