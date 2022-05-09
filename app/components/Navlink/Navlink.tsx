import cn from "classnames";

import { Link, useLocation } from "@remix-run/react";

import type { LinkProps } from "@remix-run/react";

type NavlinkProps = {
  special?: boolean;
} & LinkProps;

export const Navlink: React.FC<NavlinkProps> = ({
  to,
  special,
  children,
  ...linkProps
}) => {
  const location = useLocation();

  const isInRoute = to === location.pathname;

  return (
    <Link
      to={to}
      {...linkProps}
      className={cn({
        [`text-sm ${
          isInRoute ? "text-brand-500" : "text-gray-500"
        } px-3 py-1 rounded ${
          isInRoute ? "hover:text-brand-600" : "hover:text-gray-700"
        } hover:bg-slate-50 transition-colors`]: !special,
        [`text-sm font-medium px-4 py-2 text-brand-500 border border-blue-200 hover:bg-brand-500 hover:text-white rounded-lg transition-colors`]:
          special,
      })}
    >
      {children}
    </Link>
  );
};
