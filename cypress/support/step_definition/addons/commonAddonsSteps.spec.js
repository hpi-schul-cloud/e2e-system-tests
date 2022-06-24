import Addons_Common from '../../pages/addons/pageCommonAddons'

const addonsCommon = new Addons_Common()

When('I go to Add-Ons overview', () => {
  addonsCommon.navigateToAddonsOverview()
})