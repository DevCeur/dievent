type TopNavigationProps = {
  user: any;
};

export const TopNavigation = ({ user }: TopNavigationProps) => {
  return (
    <nav>
      Top Navigation
      <p>{user?.name}</p>
    </nav>
  );
};
