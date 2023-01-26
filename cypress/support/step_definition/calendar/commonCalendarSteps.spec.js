import Calendar from '../../pages/calendar/pageCalendar'

const calendar = new Calendar()

When('I go to calendar overview', () => {
  calendar.navigateToCalendarOverview()
})