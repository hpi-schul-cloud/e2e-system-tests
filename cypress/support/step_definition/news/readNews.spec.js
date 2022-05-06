import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Read_News from '../../page/news/readNewsPageObject'

const selectReadNews= new Read_News()

When('I go to the school news on the dashboard', () => {
    selectReadNews.goToNewsOnDashboard()
})

When('I go to the team news on the dashboard', () => {
    selectReadNews.goToTeamNewsOnDashboard()
})

Then('I can read the school news', () => {
    selectReadNews.readSchoolNews()
})

Then('I can read the team news', () => {
    selectReadNews.readTeamNews()
})