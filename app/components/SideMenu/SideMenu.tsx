import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";
import { CogIcon } from "@heroicons/react/outline";

import type { LinkProps } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

const SideMenuLink: React.FC<LinkProps> = ({ to, children, ...linkProps }) => {
  const location = useLocation();

  const isInRoute = to === location.pathname;

  return (
    <Link
      to={to}
      {...linkProps}
      className={`w-full inline-block text-sm px-6 py-4 border-l-4 ${
        isInRoute
          ? "border-brand-500 text-brand-500 hover:text-brand-500 bg-slate-50"
          : "border-transparent text-gray-500 hover:text-brand-500"
      } transition-all`}
    >
      {children}
    </Link>
  );
};

const SideMenuSection: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="w-full mb-12">
      <h3 className="text-sm text-gray-600 font-medium mb-4 pl-6">{title}</h3>

      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export const SideMenu = () => {
  return (
    <div className="lg:w-[16rem] xl:w-[18rem] fixed top-16 bottom-0 hidden lg:flex flex-col justify-between py-6 border-x border-slate-100">
      <div className="flex flex-col">
        <SideMenuSection title="Explore">
          <SideMenuLink to={ROUTE.DASHBOARD}>Dashboard</SideMenuLink>
          <SideMenuLink to={ROUTE.MY_EVENTS}>My Events</SideMenuLink>
        </SideMenuSection>

        <SideMenuSection title="Quick Actions">
          <SideMenuLink to={ROUTE.CREATE_EVENT}>Create Event</SideMenuLink>
        </SideMenuSection>
      </div>

      <div>
        <SideMenuLink to={ROUTE.SETTINGS}>
          <span className="flex items-center">
            <CogIcon className="w-5 mr-4" /> Settings
          </span>
        </SideMenuLink>
      </div>
    </div>
  );
};
