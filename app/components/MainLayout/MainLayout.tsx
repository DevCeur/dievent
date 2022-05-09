import { useLocation } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import { TopNavigation } from "../TopNavigation";

type MainLayoutProps = {
  user: any;
};

const SPECIAL_PAGES = [ROUTE.SIGN_IN, ROUTE.SIGN_UP];

export const MainLayout: React.FC<MainLayoutProps> = ({ children, user }) => {
  const location = useLocation();

  if (SPECIAL_PAGES.includes(location.pathname)) {
    return <div>{children}</div>;
  }

  return (
    <div>
      <TopNavigation user={user} />
      <div className="w-[85%] max-w-screen-xl mx-auto px-6">{children}</div>
    </div>
  );
};
