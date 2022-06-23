import Dashboard_Common from '../../pages/dashboard/pageCommondashboard'

const dashboardCommon = new Dashboard_Common()

When('I arrive on the dashboard', () => {
    dashboardCommon.arriveOnDashboard()
})