import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

export const meta = createMeta({ title: "Dasboard" });

export const loader = createAuthLoader({
  isPrivate: true,
});

const DashboardRoute = () => {
  return <div>Dashboard</div>;
};

export default DashboardRoute;
