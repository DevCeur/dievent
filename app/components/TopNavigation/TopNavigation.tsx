import { Form, Link } from "@remix-run/react";

import type { User } from "@prisma/client";

import { ROUTE } from "~/utils/enum";

import { Navlink } from "../Navlink";

type TopNavigationProps = {
  user: User | null;
};

export const TopNavigation = ({ user }: TopNavigationProps) => {
  return (
    <nav className="bg-white/30 backdrop-blur-md border-b border-slate-100 sticky top-0">
      <div className="h-16 w-[85%] max-w-screen-xl mx-auto lg:border-x border-slate-100 lg:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to={user ? ROUTE.DASHBOARD : ROUTE.HOME}>
            <span className="text-xl text-gray-700 font-semibold">DiEvent</span>
          </Link>

          {user && (
            <span className="hidden lg:inline-block text-sm text-gray-500 ml-6 pl-6">
              Hey, {user.name}!
            </span>
          )}
        </div>

        {user ? (
          <div className="flex items-center space-x-4">
            <Navlink to={ROUTE.ACCOUNT}>Profile</Navlink>

            <Form method="post" action="/sign-out">
              <button
                type="submit"
                name="subaction"
                value="sign-out"
                className="button text-red-500 border border-red-500"
              >
                Sign Out
              </button>
            </Form>
          </div>
        ) : (
          <div className="h-full flex items-center justify-between">
            <div className="hidden h-full mr-6 pr-6 lg:flex items-center space-x-4 border-r border-slate-100">
              <Navlink to={ROUTE.EVENTS}>Events</Navlink>
              <Navlink to={ROUTE.FEATURES}>Features</Navlink>
              <Navlink to={ROUTE.PRICING}>Pricing</Navlink>
            </div>

            <div className="flex items-center space-x-4">
              <Navlink to={ROUTE.SIGN_IN} className="hidden lg:inline-block">
                Login
              </Navlink>
              <Navlink to={ROUTE.SIGN_UP} special>
                Get Started
              </Navlink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
