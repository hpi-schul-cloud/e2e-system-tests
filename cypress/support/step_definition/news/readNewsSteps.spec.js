import News from '../../pages/news/pageNews'

const news = new News()

//loginStep.spec.js
//commonNewsSteps.spec.js
//commonTeamsSteps.spec.js


Then('I can read the news {string} with description {string}', (titleOfNews, descriptionOfNews) => {
  news.teacherReadsNewsOnOverviewPage(titleOfNews, descriptionOfNews)
})
