import Dashboard_Common from '../../pages/dashboard/pageCommonDashboard'

const dashboardCommon = new Dashboard_Common()

When('I arrive on the dashboard', () => {
    dashboardCommon.visitDashboard()
})

Then('I arrive on the dashboard', () => {
    dashboardCommon.arriveOnDashboard()
})