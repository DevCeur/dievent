import { createMeta } from "~/utils/createMeta";

export const meta = createMeta({ title: "Home" });

const HomeRoute = () => {
  return (
    <div>
      <h1 className="text-red-500">DiEvent</h1>
    </div>
  );
};

export default HomeRoute;
