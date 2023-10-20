const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Groups from '../../pages/group/pageGroups';

const groups = new Groups()

When('I click the manage icon', () => {
	groups.clickManageClassIcon()
})

Then('I can see the manage classes page', () => {
	groups.isManageClassPage()
})

When('I click the cancel manage class button', () => {
	groups.clickCancelManageClass()
})

Then('I can see the cancel modal', () => {

})
