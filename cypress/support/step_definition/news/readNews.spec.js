import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Read_News from '../../page/news/readNewsPageObject'

When('I go to the school news on the dashboard', () => {
    const selectReadNews= new Read_News()
    selectReadNews.goToNewsOnDashboard()
})

When('I go to the team news on the dashboard', () => {
    const selectReadNews= new Read_News()
    selectReadNews.goToTeamNewsOnDashboard()
})

Then('I can read the school news', () => {
    const selectReadNews= new Read_News()
    selectReadNews.readSchoolNews()
})

Then('I can read the team news', () => {
    const selectReadNews= new Read_News()
    selectReadNews.readTeamNews()
})
