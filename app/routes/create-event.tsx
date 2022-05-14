import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

export const meta = createMeta({ title: "Create Event" });

export const loader = createAuthLoader({ isPrivate: true });

const CreateEventRoute = () => {
  return (
    <div>
      <p>Create Event</p>
    </div>
  );
};

export default CreateEventRoute;
