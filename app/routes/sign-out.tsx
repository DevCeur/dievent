import { redirect } from "@remix-run/node";

import type { LoaderFunction, ActionFunction } from "@remix-run/node";

import { ROUTE } from "~/utils/enum";
import {
  destroySession,
  getUserSession,
} from "~/utils/sessions/userSession.server";

export const action: ActionFunction = async ({ request }) => {
  const userSession = await getUserSession(request);

  return redirect(ROUTE.HOME, {
    headers: { "Set-Cookie": await destroySession(userSession) },
  });
};

export const loader: LoaderFunction = () => {
  return redirect(ROUTE.HOME);
};
