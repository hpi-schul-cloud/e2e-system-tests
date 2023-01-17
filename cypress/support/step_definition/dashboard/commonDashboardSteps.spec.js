import Dashboard from '../../pages/dashboard/pageDashboard'

const dashboard = new Dashboard()

When('I arrive on the dashboard', () => {
    dashboard.arriveOnDashboard()
})