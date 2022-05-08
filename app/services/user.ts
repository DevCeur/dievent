import type { User } from "@prisma/client";

import { prisma } from "~/lib/prisma.server";

import { getUserSession } from "~/utils/sessions/userSession.server";

export const getUserById = async (
  request: Request
): Promise<{ user: User | null; errors: any }> => {
  const userSession = await getUserSession(request);

  const userId = userSession.get("userId");

  if (!userId) {
    return { user: null, errors: null };
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    return { user, errors: null };
  } catch (error) {
    return {
      user: null,
      errors: { server: "This ID does not correspond to a registered user" },
    };
  }
};
