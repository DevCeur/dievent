import bcrypt from "bcryptjs";

import type { User } from "@prisma/client";
import type { ExtendedError, UnknownObject } from "~/utils/types";

import { prisma } from "~/lib/prisma.server";

import { getUserSession } from "~/utils/sessions/userSession.server";

export const getUserById = async (
  request: Request
): Promise<{ user: User | null; errors: UnknownObject | null }> => {
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

type RegisterUserOptions = {
  email: string;
  password: string;
};

export const registerUser = async ({
  email,
  password,
}: RegisterUserOptions): Promise<{
  user: User | null;
  errors: UnknownObject | null;
}> => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return { user, errors: null };
  } catch (e) {
    const error = e as ExtendedError;

    if (error.code === "P2002") {
      return {
        user: null,
        errors: {
          [error.meta
            .target[0]]: `This ${error.meta.target[0]} is already registered`,
        },
      };
    }

    return {
      user: null,
      errors: {
        server: "Server error, please contact dievent@support for more info.",
      },
    };
  }
};

type SignInUser = {
  email: string;
  password: string;
};

export const signInUser = async ({
  email,
  password,
}: SignInUser): Promise<{
  user: User | null;
  errors: UnknownObject | null;
}> => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return {
        user: null,
        errors: { wrongCredentials: "Email and password don't match" },
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        user: null,
        errors: { wrongCredentials: "Email and password don't match" },
      };
    }

    return { user, errors: null };
  } catch (error) {
    return {
      user: null,
      errors: {
        server: "Server error, please contact dievent@support for more info.",
      },
    };
  }
};
