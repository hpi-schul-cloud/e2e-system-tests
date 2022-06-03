import Read_News from '../../pages/news/pageReadNews'

const readNews= new Read_News()

//Scenario: Reading a school news on the dashboard
        //Given I am logged in as a 'teacher' at 'brb'
        When('I go to school news on the dashboard', () => {
            readNews.goToNewsOnDashboard()
        })
        Then('I can read the school news', () => {
            readNews.readSchoolNews()
        })


//Scenario: Reading a team news on the dashboard
        //Given I am logged in as a 'student' at 'brb'
        When('I go to team news on the dashboard', () => {
            readNews.goToTeamNewsOnDashboard()
        })
        Then('I can read the team news', () => {
            readNews.readTeamNews()
        })
