import Calendar_Navigation from '../../pages/common_global/pageNavigation'

const calendarNavigation = new Calendar_Navigation ()


When('I go to calendar overview', () => {
  calendarNavigation.goToCalendarOverview()
  })