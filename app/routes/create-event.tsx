import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

import { CreateEventView } from "~/views/CreateEventView";

export const meta = createMeta({ title: "Create Event" });

export const loader = createAuthLoader({ isPrivate: true });

const CreateEventRoute = () => {
  return <CreateEventView />;
};

export default CreateEventRoute;
