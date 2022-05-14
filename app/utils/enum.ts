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
