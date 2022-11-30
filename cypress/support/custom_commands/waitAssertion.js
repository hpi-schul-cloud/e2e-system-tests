const contentCardVisibility = '.room-overview-col > div > span > div + div '
const roomboardVisibility = '.container-full-width'

Cypress.Commands.add('roomOverviewLoadAssertion', () => {
  cy.get(contentCardVisibility).then($elm => {
    const text = $elm
      .text()
      .replace(/\s+/g, ' ')
      .trim()
    expect(text).to.match(/\w*\s/)
  })
})

Cypress.Commands.add('roomboardLoadAssertion', () => {
  cy.get(roomboardVisibility).then($elm => {
    expect($elm).exist
  })
})

Cypress.Commands.add('preventFormSubmitDefault', selectors => {
  cy.get(selectors).then(form$ => {
    form$.on('submit', e => {
      e.preventDefault()
    })
  })
})
