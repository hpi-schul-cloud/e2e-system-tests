import News_Common from '../../pages/news/pageCommonNews'

const newsCommon = new News_Common()

When('I go to news overview', () => {
  newsCommon.navigateToNewsOverview()
})

And ('I click on add news button', () => {
  newsCommon.clickOnAddNews()
})

Then('I see news creation page', () => {
  newsCommon.seeNewsCreationPage()
})

And('I enter news title {string}', (newsTitle) => {
  newsCommon.enterNewsTitle(newsTitle)
})

And('I enter news description {string}', (newsDescription) => {
  newsCommon.enterNewsDescription(newsDescription)
})

And('I see date input field', () => {
  newsCommon.seeDateInput()

})

And('I see time input field', () => {
  newsCommon.seeTimeInput()
})

And('I click on save button', () => {
  newsCommon.clickOnCreateNewsSaveButton()
})

Then('I see news is created successfully with title {string} and with description {string}', (newsTitle, newsDesc) => {
  newsCommon.seeCreatedNews(newsTitle, newsDesc)
})

And('I click on the news teaser {string}', (newsName) => {
  newsCommon.openNewsDetailPage(newsName)
})

When('I click on delete button', () => {
  newsCommon.clickOnDeleteNewsButton()
})

And('I confirm the deletion on confirmation dialog box', () => {
  newsCommon.confirmDeletionOnDialogBox()
})

Then('I do not see the news {string}', (newsName) => {
  newsCommon.doNotSeeNews(newsName)
})