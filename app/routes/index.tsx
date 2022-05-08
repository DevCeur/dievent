import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

import { HomeView } from "~/views/HomeView";

export const meta = createMeta({ title: "Home" });

export const loader = createAuthLoader({ isPrivate: false });

const HomeRoute = () => {
  return <HomeView />;
};

export default HomeRoute;
