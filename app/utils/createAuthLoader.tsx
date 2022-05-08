import { redirect } from "./server/remix-node.server";

import type { User } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";

import { getUserById } from "~/services/user";

import { ROUTE } from "./enum";
import { getUserSession } from "./sessions/userSession.server";

type CreateAuthLoaderOptions = {
  isPrivate: boolean;
  loader?: LoaderFunction;
};

export const createAuthLoader = ({
  isPrivate,
  loader,
}: CreateAuthLoaderOptions) => {
  try {
    const innerLoader: LoaderFunction = async (loaderOptions) => {
      let user: User | null = null;

      const { request } = loaderOptions;

      const userSession = await getUserSession(request);

      const userId = userSession.get("userId");

      if (userId) {
        const { user: userFound } = await getUserById(request);

        user = userFound;
      }

      const isAuthenticated = userId && user;

      if (isPrivate && !isAuthenticated) {
        return redirect(ROUTE.HOME);
      }

      if (!isPrivate && isAuthenticated) {
        return redirect(ROUTE.DASHBOARD);
      }

      if (loader) {
        return loader(loaderOptions);
      }

      return { auth: isAuthenticated };
    };

    return innerLoader;
  } catch (error) {
    throw new Error(`Error trying to get authenticated user ${error}`);
  }
};
