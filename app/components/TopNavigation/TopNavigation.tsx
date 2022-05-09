import { Link } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import { Navlink } from "../Navlink";

type TopNavigationProps = {
  user: any;
};

export const TopNavigation = ({ user }: TopNavigationProps) => {
  return (
    <nav className="bg-white/30 backdrop-blur-md border-b border-slate-100 sticky top-0">
      <div className="h-16 w-[85%] max-w-screen-xl mx-auto border-x border-slate-100 px-6 flex items-center justify-between">
        <Link to={ROUTE.HOME}>
          <span className="text-xl text-gray-700 font-semibold">DiEvent</span>
        </Link>

        {user ? (
          <div>
            <p>User Authenticated</p>
          </div>
        ) : (
          <div className="h-full flex items-center justify-between">
            <div className="h-full mr-6 pr-6 flex items-center space-x-4 border-r border-slate-100">
              <Navlink to={ROUTE.EVENTS}>Events</Navlink>
              <Navlink to={ROUTE.FEATURES}>Features</Navlink>
              <Navlink to={ROUTE.PRICING}>Pricing</Navlink>
            </div>

            <div className="flex items-center space-x-4">
              <Navlink to={ROUTE.SIGN_IN}>Login</Navlink>
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
