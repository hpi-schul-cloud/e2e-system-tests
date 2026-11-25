const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import BoardImport from "../../pages/board_import/pageBoardImport";

const boardImport = new BoardImport();

When("I start a board import with the link {string} via API", (link) => {
	boardImport.startBoardImportViaApi(link);
});

Then(
	"I see the board import job has the status {string} within {int} seconds via API",
	(status, timeoutInSeconds) => {
		boardImport.seeBoardImportJobHasStatusViaApi(status, timeoutInSeconds);
	}
);
