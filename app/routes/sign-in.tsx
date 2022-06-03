import invariant from "tiny-invariant";

import { redirect } from "@remix-run/node";

import type { ActionFunction } from "@remix-run/node";

import { createMeta } from "~/utils/createMeta";
import { EMAIL_REGEX, ERROR_MESSAGES, ROUTE } from "~/utils/enum";
import { createAuthLoader } from "~/utils/createAuthLoader";
import {
  commitSession,
  getUserSession,
} from "~/utils/sessions/userSession.server";

import { signInUser } from "~/services/user";

import { SignInView } from "~/views/SignInView";

export const meta = createMeta({ title: "Sign In" });

export const loader = createAuthLoader({ isPrivate: false });

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userSession = await getUserSession(request);

  const email = formData.get("email");
  const password = formData.get("password");

  invariant(typeof email === "string");
  invariant(typeof password === "string");

  const errors: { [x: string]: string } = {};

  if (!email) {
    errors.email = ERROR_MESSAGES.REQUIRED_FIELD;
  }

  if (email && !email.match(EMAIL_REGEX)) {
    errors.email = "This is not a valid email";
  }

  if (!password) {
    errors.password = ERROR_MESSAGES.REQUIRED_FIELD;
  }

  if (password && password.length < 6) {
    errors.password = "This password is too short. +6 characters";
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  const { user, errors: userErrors } = await signInUser({ email, password });

  if (userErrors) {
    return { errors: userErrors };
  }

  userSession.set("userId", user?.id);

  return redirect(ROUTE.DASHBOARD, {
    headers: { "Set-Cookie": await commitSession(userSession) },
  });
};

const SignInRoute = () => {
  return <SignInView />;
};

export default SignInRoute;
