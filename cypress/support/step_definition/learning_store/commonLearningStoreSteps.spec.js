const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Learning_Store from '../../pages/learning_store/pageLearningstore'

const learningstore = new Learning_Store()

When('I go to Learning Store overview', () => {
  learningstore.navigateToLearningstoreOverview()
})

When('I do not see Learning Store in side bar', () => {
  learningstore.assertLearningstoreNotVisibleInMenu()
})

When('I see Learning Store in side bar', () => {
  learningstore.assertLearningstoreVisibleInMenu()
})
