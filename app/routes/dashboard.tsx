import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

import { DashboardView } from "~/views/DashboardView";

export const meta = createMeta({ title: "Dasboard" });

export const loader = createAuthLoader({
  isPrivate: true,
});

const DashboardRoute = () => {
  return <DashboardView />;
};

export default DashboardRoute;
