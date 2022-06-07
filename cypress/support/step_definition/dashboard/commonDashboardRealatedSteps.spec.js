import Dashboard_Common from '../../pages/dashboard/pageCommonDashboardRealated'

const dashboardCommon = new Dashboard_Common()


 When('I arrive on the dashboard', () => {
  dashboardCommon.arriveOnDashboard()
  })