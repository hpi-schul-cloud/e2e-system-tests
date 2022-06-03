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

When('I type in {string}', (filename) => {
    files.typeFilename(filename)
})

And('I click create file button', () => {
    files.clickOnCreateFile()
})

When('I click file with {string}', (filename) => {
    files.clickOnFileWithName(filename)
})

And('I click rename file button', () => {
    files.clickOnRenameFile()
})

And('I enter new file name {string}', (filename) => {
    files.typeNewFilename(filename)
})

And('I click save name button', () => {
    files.clickOnSaveFilename()
})

And('I click delete file button', () => {
    files.clickOnDeleteFile()
})

And('I click confirm delete file button', () => {
    files.clickOnConfirmDeleteFile()
})

//THEN
Then('LibreOffice opens', () => {
    files.libreOfficeOpens()
})

Then('I can see file with name {string}', (filename) => {
    files.filenameIsShown(filename)
})

Then('I can not see file with name {string}', (filename) => {
    files.filenameIsNotShown(filename)
})

//doesn't work
Then('I can enter {string}',(text) => {
    files.enterTextIntoDocument(text)
})

//doesn't work
Then('I can see previously entered {string}',(text) => {
    files.textIsShownInDocument(text)
})