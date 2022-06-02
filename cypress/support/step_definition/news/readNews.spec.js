import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Read_News from '../../pages/news/pageReadNews'

const readNews= new Read_News()

When('I go to school news on the dashboard', () => {
    readNews.goToNewsOnDashboard()
})

When('I go to team news on the dashboard', () => {
    readNews.goToTeamNewsOnDashboard()
})

Then('I can read the school news', () => {
    readNews.readSchoolNews()
})

Then('I can read the team news', () => {
    readNews.readTeamNews()
})