import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Files from '../../pages/files/pageFiles'

const files = new Files()

//WHEN also includes AND
When('I click create a new file button', () => {
    files.clickOnCreateNewFile()
})

And('I select filetype document', () => {
    files.selectFiletypeDocument()
})

When('I type in {string}', (fileName) => {
    files.typeFilename(fileName)
})

And('I click create file button', () => {
    files.clickOnCreateFile()
})

When('I click file with {string}', (fileName) => {
    files.clickOnFileWithName(fileName)
})

And('I click rename file button of file {string}', (fileName) => {
    files.clickOnRenameFile(fileName)
})

And('I enter new file name {string}', (fileName) => {
    files.typeNewFilename(fileName)
})

And('I click save name button', () => {
    files.clickOnSaveFilename()
})

And('I click delete file button of file {string}', (fileName) => {
    files.clickOnDeleteFile(fileName)
})

And('I click confirm delete file button of file {string}', (fileName) => {
    files.clickOnConfirmDeleteFile(fileName)
})

//THEN
Then('LibreOffice opens', () => {
    files.libreOfficeOpens()
})

Then('I can see file with name {string}', (fileName) => {
    files.fileNameIsShown(fileName)
})

Then('I can not see file with name {string}', (fileName) => {
    files.fileNameIsNotShown(fileName)
})

//doesn't work
Then('I can enter {string}',(text) => {
    files.enterTextIntoDocument(text)
})

//doesn't work
Then('I can see previously entered {string}',(text) => {
    files.textIsShownInDocument(text)
})