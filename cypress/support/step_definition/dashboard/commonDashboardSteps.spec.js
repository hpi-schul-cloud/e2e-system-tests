const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Dashboard from "../../pages/dashboard/pageDashboard";

const dashboard = new Dashboard();

Then("I arrive on the dashboard", () => {
	dashboard.arriveOnDashboard();
});
