const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Learning_Store from '../../pages/learning_store/pageLearningStore'

const learningStore = new Learning_Store()

When('I go to Learning Store overview', () => {
  learningStore.navigateToLearningStoreOverview()
})

When('I do not see Learning Store in side bar', () => {
  learningStore.assertLearningStoreNotVisibleInMenu()
})

When('I see Learning Store in side bar', () => {
  learningStore.assertLearningStoreVisibleInMenu()
})
