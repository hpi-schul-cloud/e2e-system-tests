import News from '../../pages/news/pageNews'

const news = new News()

When('I go to news overview', () => {
  news.navigateToNewsOverview()
})

And ('I click on add news button', () => {
  news.clickOnAddNews()
})

Then('I see news creation page', () => {
  news.seeNewsCreationPage()
})

And('I enter news title {string}', (newsTitle) => {
  news.enterNewsTitle(newsTitle)
})

And('I enter news description {string}', (newsDescription) => {
  news.enterNewsDescription(newsDescription)
})

And('I see date input field', () => {
  news.seeDateInput()

})

And('I see time input field', () => {
  news.seeTimeInput()
})

And('I click on save button', () => {
  news.clickOnCreateNewsSaveButton()
})

Then('I see news is created successfully with title {string} and with description {string}', (newsTitle, newsDesc) => {
  news.seeCreatedNews(newsTitle, newsDesc)
})

And('I click on the news teaser {string}', (newsName) => {
  news.openNewsDetailPage(newsName)
})

When('I click on delete button', () => {
  news.clickOnDeleteNewsButton()
})

And('I confirm the deletion on confirmation dialog box', () => {
  news.confirmDeletionOnDialogBox()
})

Then('I do not see the news {string}', (newsName) => {
  news.doNotSeeNews(newsName)
})