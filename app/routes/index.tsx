import { createMeta } from "~/utils/createMeta";

import { HomeView } from "~/views/HomeView";

export const meta = createMeta({ title: "Home" });

const HomeRoute = () => {
  return <HomeView />;
};

export default HomeRoute;
