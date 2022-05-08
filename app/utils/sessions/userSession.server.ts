import { createCookieSessionStorage } from "../server/remix-node.server";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "dievent/auth__session",
      httpOnly: true,
      maxAge: 31 * 24 * 60 * 60,
      sameSite: "lax",
      secrets: [process.env.AUTH_SESSION_SECRET as string],
      secure: true,
    },
  });

export const getUserSession = async (request: Request) => {
  return await getSession(request.headers.get("Cookie"));
};

export const commitUserSession = async (request: Request) => {
  const userSession = await getUserSession(request);

  return await commitSession(userSession);
};

export const destroyUserSession = async (request: Request) => {
  const userSession = await getUserSession(request);

  return await destroySession(userSession);
};
