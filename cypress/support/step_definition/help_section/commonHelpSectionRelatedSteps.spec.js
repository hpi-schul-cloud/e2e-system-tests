import Help_Common from '../../pages/help_section/pageCommonHelpSectionRelated'

const helpCommon = new Help_Common()

When('I go to help section in sidebar', () => {
  helpCommon.goToHelpSection()
  })

  When('I go to help articles in sidebar', () => {
    helpCommon.goToHelpArticles()
  })

  When ('I go to contact in sidebar', () => {
    helpCommon.goToHelpContact()
  })

  When('I go to advanced trainings in sidebar', () => {
    helpCommon.goToAdvancedTrainings()
  })
