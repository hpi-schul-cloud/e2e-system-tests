import Management from "../../pages/admin/pageAdministration";
import {When} from "@badeball/cypress-cucumber-preprocessor";

const management = new Management()

When('I click on external tools panel', () => {
    management.clickExternalToolsPanel();
})
