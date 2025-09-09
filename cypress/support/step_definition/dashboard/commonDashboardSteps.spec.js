const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Dashboard from "../../pages/dashboard/pageDashboard";

const dashboard = new Dashboard();

Then("I arrive on the dashboard", () => {
	dashboard.arriveOnDashboard();
});

Then("I see my initials {string} in the dashboard", (initials) => {
	dashboard.assertNameInitialsIsVisibleWithValue(initials);
});
