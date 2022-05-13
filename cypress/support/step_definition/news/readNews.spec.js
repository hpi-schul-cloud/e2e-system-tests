import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Read_News from '../../pages/news/pageReadNews'

const selectReadNews= new Read_News()

When('I go to school news on the dashboard', () => {
    selectReadNews.goToNewsOnDashboard()
})

When('I go to team news on the dashboard', () => {
    selectReadNews.goToTeamNewsOnDashboard()
})

Then('I can read the school news', () => {
    selectReadNews.readSchoolNews()
})

Then('I can read the team news', () => {
    selectReadNews.readTeamNews()
})