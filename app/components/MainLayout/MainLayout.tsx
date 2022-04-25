import { TopNavigation } from "../TopNavigation";

type MainLayoutProps = {
  user: any;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children, user }) => {
  return (
    <div>
      <TopNavigation user={user} />
      <div>{children}</div>
    </div>
  );
};
