const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Learning_Store from '../../pages/learning_store/pageLearningStore'

const learningStore = new Learning_Store()

When('I go to LearnStore overview', () => {
  learningStore.navigateToLearnStoreOverview()
})