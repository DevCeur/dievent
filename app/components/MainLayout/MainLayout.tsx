import { TopNavigation } from "../TopNavigation";

type MainLayoutProps = {
  user: any;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, user }) => {
  return (
    <div>
      <TopNavigation user={user} />
      <div className="w-[85%] max-w-screen-xl mx-auto px-6">{children}</div>
    </div>
  );
};
