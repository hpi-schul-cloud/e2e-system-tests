import Calendar_Common from '../../pages/calendar/pageCommonCalendar'

const calendarCommon = new Calendar_Common()

When('I go to calendar overview', () => {
  calendarCommon.navigateToCalendarOverview()
})