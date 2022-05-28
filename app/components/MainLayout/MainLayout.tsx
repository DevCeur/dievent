import { useLocation } from "@remix-run/react";

import type { User } from "@prisma/client";

import { ROUTE } from "~/utils/enum";

import { Footer } from "../Footer";
import { SideMenu } from "../SideMenu";
import { TopNavigation } from "../TopNavigation";

type MainLayoutProps = {
  user: User | null;
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

      <div className="w-[85%] max-w-screen-xl mx-auto overflow-hidden">
        {user && <SideMenu />}

        <div
          className={`min-h-[calc(100vh-65px)] flex flex-col ${
            user ? "lg:pl-[18rem] xl:pl-[312px]" : "lg:pl-6"
          } lg:pr-6 ${user ? "lg:border-r" : "border-none"} border-slate-100`}
        >
          <main className="flex flex-1 pt-6 pb-12">{children}</main>

          {!user && <Footer user={user} />}
        </div>
      </div>
    </div>
  );
};
