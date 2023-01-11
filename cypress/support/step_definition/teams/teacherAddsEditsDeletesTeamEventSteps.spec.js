import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()


Then ('I do not see the team {string}',(teamName) =>{
	teams.doNotSeeTeam(teamName)
})

When ('I go to calendar tab',() =>{

})
When ('I click on Add date button',() =>{

})
Then ('I see event creation dialog box',() =>{

})
When ('I enter the title {string}', (eventTitle) =>{

})
When ('I select the from date', () =>{

})
When ('I select the to date', () =>{

})
When ('I enter the description {string}', (eventDescription) =>{

})
When ('I enter the event place {string}', (eventPlace) =>{

})
When ('I click on Save team event', () =>{

})
Then ('I am on team detail Calendar tab and title {string} is visible', (eventTitle) =>{

})
When ('I click on edit icon', () => {

})
Then ('I see event creation dialog box', () =>{

})
When ('I re enter the title {string}', (editedEventTitle) =>{

})
When ('I re enter the description {string}', (editedEventDescription) =>{

})
When ('I re enter the event place name {string}', (editedEventPlace) =>{

})
When ('I click on Save team event', () =>{

})
Then ('I am on team detail Calendar tab and title {string} is visible', (editedEventTitle) =>{

})
Then ('I am on the team detail Calendar tab and description {string} is visible', (editedEventDescription) =>{

})
When ('I click on edit icon', () =>{

})
Then ('I see event creation dialog box', () =>{

})
When ('I click on Delete team event button', () =>{

}
)
Then ('I am on team detail Calendar tab and title {string} is NOT visible', (editedEventTitle) =>{

})