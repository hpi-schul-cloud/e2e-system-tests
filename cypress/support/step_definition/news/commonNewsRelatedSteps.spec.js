import News_Common from '../../pages/news/pageCommonNews'

const newsCommon = new News_Common()

When('I go to news overview', () => {
  newsCommon.navigateToNewsOverview()
})