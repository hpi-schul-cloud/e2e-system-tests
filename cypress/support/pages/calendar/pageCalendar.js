"use strict";

class Calendar {
  static #calendarOverviewNavigationButton = '[data-testid="sidebar-calendar"]';
  static #calendarOverviewPageTitle = '[data-testid="Kalender"]';
  static #calendarElement = '[data-testid="calendar"]';
  static #nextCalendarPage = '[data-testid="right-next-button"]';
  static #createEventNameFormElement = '[data-testid="create-event-name"]';
  static #editEventNameFormElement = '[data-testid="edit-event-name"]';
  static #createEventStartDateFormElement = '[data-testid="create-startDate"]';
  static #createEventEndDateFormElement = '[data-testid="create-endDate"]';
  static #editEventStartDateFormElement = '[data-testid="edit-startDate"]';
  static #editEventEndDateFormElement = '[data-testid="edit-endDate"]';
  static #createEventDescriptionFormElement = '[data-testid="create-event-description"]';
  static #createEventLocationFormElement = '[data-testid="create-event-location"]';
  static #createEventFormSubmitButton = '[data-testid="submit-btn-create-event-modal"]';
  static #editEventFormDeleteButton = '[data-testid="calendar-event-btn-delete"]';

  navigateToCalendarOverview() {
    cy.visit("/calendar");
    cy.get(Calendar.#calendarOverviewNavigationButton).click();
    cy.url().should("include", "/calendar");
  }

  seeCalendarOverviewPage() {
    cy.url().should("include", "/calendar");
    cy.get(Calendar.#calendarOverviewPageTitle).should("exist");
  }

  clickOnDay(daynumber) {
    cy.get(Calendar.#calendarElement).find("span").contains(daynumber).click();
  }

  clickOnNextCalendarPage() {
    cy.get(Calendar.#nextCalendarPage).click();
  }

  seeCreateEventModal() {
    cy.get(Calendar.#createEventNameFormElement).should("be.visible");
  }

  seeEditEventModal() {
    cy.get(Calendar.#editEventNameFormElement).should("be.visible");
  }

  enterEventTitle(eventTitle) {
    cy.get(Calendar.#createEventNameFormElement)
      .should("be.visible")
      .clear()
      .type(eventTitle)
      .should("have.value", eventTitle);
  }

  enterEventStartTime(eventStartTime) {
    cy.get(Calendar.#createEventStartDateFormElement)
      .type("{backspace}".repeat(4))
      .type(eventStartTime);
    cy.get(Calendar.#createEventNameFormElement).click();
  }

  changeEventStartTime(eventStartTime) {
    cy.get(Calendar.#editEventStartDateFormElement)
      .type("{backspace}".repeat(4))
      .type(eventStartTime);
    cy.get(Calendar.#editEventNameFormElement).click();
  }

  enterEventEndTime(eventEndTime) {
    cy.get(Calendar.#createEventEndDateFormElement)
      .type("{backspace}".repeat(4))
      .type(eventEndTime);
    cy.get(Calendar.#createEventNameFormElement).click();
  }

  changeEventEndTime(eventEndTime) {
    cy.get(Calendar.#editEventEndDateFormElement)
      .type("{backspace}".repeat(4))
      .type(eventEndTime);
    cy.get(Calendar.#editEventNameFormElement).click();
  }

  enterEventDescription(eventDescription) {
    cy.get(Calendar.#createEventDescriptionFormElement).type(eventDescription);
  }

  enterEventLocation(eventLocation) {
    cy.get(Calendar.#createEventLocationFormElement).type(eventLocation);
  }

  submitEventForm() {
    cy.get(Calendar.#createEventFormSubmitButton).click();
  }

  seeEventInCalendarWithStartTime(eventStartTime, eventTitle) {
    cy.get(Calendar.#calendarElement)
      .find("span")
      .contains(eventTitle)
      .prev()
      .contains(eventStartTime);
  }

  clickOnEventInCalendar(eventStartTime, eventTitle) {
    cy.get(Calendar.#calendarElement)
      .find("span")
      .contains(eventTitle)
      .prev()
      .contains(eventStartTime)
      .click();
  }

  clickDeleteEventButton() {
    cy.get(Calendar.#editEventFormDeleteButton).click();
  }

  doNotSeeEventInCalendar(eventTitle) {
    cy.get(Calendar.#calendarElement).should("not.contain", eventTitle);
  }
}
export default Calendar;
