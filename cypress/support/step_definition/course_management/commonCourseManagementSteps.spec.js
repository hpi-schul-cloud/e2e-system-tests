import Management from '../../pages/admin/pageAdministration';
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

const management = new Management();

When('I click on edit button of course {string}', (courseName) => {
	management.editSpecificCourse(courseName);
})

Then('I see course administration page', () => {
	management.seeCourseAdministrationPage();
})
