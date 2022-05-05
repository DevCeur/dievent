import { Link } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

type TopNavigationProps = {
  user: any;
};

export const TopNavigation = ({ user }: TopNavigationProps) => {
  return (
    <nav>
      <Link to={ROUTE.HOME}>
        <span className="text-xl text-gray-900 font-bold">DiEvent</span>
      </Link>

      <p>{user?.name}</p>
    </nav>
  );
};
