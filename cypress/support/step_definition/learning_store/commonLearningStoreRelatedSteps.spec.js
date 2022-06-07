import Learning_Store_Common from '../../pages/learning_store/pageCommonLearningStoreRelated'

const learningStoreCommon = new Learning_Store_Common()

When('I go to LernStore overview', () => {
  learningStoreCommon.goToLernStoreOverview()
})
