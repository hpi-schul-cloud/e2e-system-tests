import Management from "../../pages/admin/pageAdministration";
import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

const management = new Management()

When('I click on external tools panel', () => {
    management.clickExternalToolsPanel();
})

When('I click on delete external tool button', () => {
    management.clickDeleteExternalToolButton()
})

When('I click on cancel external tool deletion button', () => {
    management.clickCancelExternalToolDeletionButton()
})

Then('I see the external tools table', () => {
    management.seeExternalToolTable()
})

Then('I see the external tool deletion dialog information text', () => {
    management.seeExternalToolDeletionDialogInfoText()
})

Then('I see the external tool deletion dialog title', () => {
    management.seeExternalToolDeletionDialogTitle()
})

Then('I see at least one external tool', () => {
    management.seeOneOrMoreExternalTools()
})


