Given('I am logged in as a {string} at {string}', (username, environment) => {
  cy.login(username, environment)
})

Then('I log out', () => {
  cy.logout().click
})

And('I go to room {string}', (room_name) => {
  const selectedRoom = `[aria-label='${room_name}']`
  cy.get(selectedRoom).click({
    multiple: true,
    force: true
  })
})