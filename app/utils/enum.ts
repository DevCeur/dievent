export const ROUTE = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  EVENTS: "/events",
  FEATURES: "/features",
  PRICING: "/pricing",
  HELP: "/help",
  DASHBOARD: "/dashboard",
  ACCOUNT: "/account",
  MY_EVENTS: "/my-events",
  CALENDAR: "/calendar",
  SETTINGS: "/settings",
  CREATE_EVENT: "/create-event",
};

export const ERROR_MESSAGES = {
  REQUIRED_FIELD: "This field is required",
};

export const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CREATE_EVENT_STEP_IDENTIFIER = {
  BASIC_INFO: "basic_info",
  DATE_TIME_SELECTION: "date_time_selection",
  LOCATION_SELECTION: "location_selection",
  TEAM_SELECTION: "team_selection",
  CONFIRMATION: "confirmation",
};

export const CREATE_EVENT_STEP_TITLE_BY_IDENTIFIER = {
  [CREATE_EVENT_STEP_IDENTIFIER.BASIC_INFO]: "Add basic info about the event",
  [CREATE_EVENT_STEP_IDENTIFIER.DATE_TIME_SELECTION]:
    "Select a start and end date",
  [CREATE_EVENT_STEP_IDENTIFIER.LOCATION_SELECTION]:
    "Choose a location for your event",
  [CREATE_EVENT_STEP_IDENTIFIER.TEAM_SELECTION]: "Select your event's team",
  [CREATE_EVENT_STEP_IDENTIFIER.CONFIRMATION]: "That's it, take a quick review",
};
