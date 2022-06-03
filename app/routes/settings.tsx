import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

export const meta = createMeta({ title: "Settings" });

export const loader = createAuthLoader({ isPrivate: true });

const SettingsRoute = () => {
  return (
    <div>
      <p>Settings</p>
    </div>
  );
};

export default SettingsRoute;
