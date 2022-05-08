import { redirect } from "./server/remix-node.server";

import type { LoaderFunction } from "@remix-run/node";

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
  const innerLoader: LoaderFunction = async (loaderOptions) => {
    const { request } = loaderOptions;

    const userSession = await getUserSession(request);

    const isAuthenticated = userSession.get("userId");

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
};
