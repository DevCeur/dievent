import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

export const meta = createMeta({ title: "My Events" });

export const loader = createAuthLoader({ isPrivate: true });

const MyEventsRoute = () => {
  return (
    <div>
      <p>My Events</p>
    </div>
  );
};

export default MyEventsRoute;
