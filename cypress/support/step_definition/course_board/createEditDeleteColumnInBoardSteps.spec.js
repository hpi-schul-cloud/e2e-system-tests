const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Board from '../../pages/course_board/pageBoard'

const board = new Board()

When('I go to the tab contents in course detail page', () => {
  board.clickOnCourseContentTab()
})

When('I click on card Course Board', () => {
  board.clickOnCourseBoardCardInCourseDetailPage()
})

Then('I see the page title in Course Board page', () => {
  board.seeCourseBoardTitle()
})

Then(
  'I see the existing card with welcome message in the existing column',
  () => {
    board.seeByDefaultWelcomeCardInBoard()
  }
)

When('I click on the button Add column', () => {
  board.clickOnAddNewColumnButton()
})

When('I enter the title name {string}', newColumnName => {
  board.enterNewColumnTitle(newColumnName)
})

When('I enter the edited title name {string}', editedColumnName => {
  board.enterEditedColumnTitle(editedColumnName)
})

When('I click on the page outside of the column', () => {
  board.clickOutsideTheColumnToSaveTheColumn()
})

Then('I see my column named {string}', newColumnName => {
  board.seeNewlyCreatedColumn(newColumnName)
})

Then(
  'I click on the button with the Icon Plus to add a new card in the column',
  () => {
    board.clickOnAddNewCardButton()
  }
)

When('I click on three dot menu in the column', () => {
  board.clickOnThreeDotOnColumn()
})

When('I select the Edit option in the drop down menu', () => {
  board.selectEditInColumnThreeDotMenu()
})

When('I select the Delete option in the drop down', () => {
  board.clickOnDeleteColumnInMenu()
})

Then('I see the confirmation Modal', () => {
  board.seeDeleteConfirmationModal()
})

When('I click on the button Remove on the Modal', () => {
  board.clickOnDeleteColumnModal()
})

Then('I do not see the column', () => {
  board.doNotSeeColumnAfterDeletion()
})
