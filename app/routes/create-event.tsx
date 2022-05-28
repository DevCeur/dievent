import { useEffect } from "react";

import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

import { useCreateEvent } from "~/store/createEventStore";

import { CreateEventView } from "~/views/CreateEventView";

export const meta = createMeta({ title: "Create Event" });

export const loader = createAuthLoader({ isPrivate: true });

const CreateEventRoute = () => {
  const resetState = useCreateEvent((state) => state.resetState);

  useEffect(() => {
    resetState();
  }, [resetState]);

  return <CreateEventView />;
};

export default CreateEventRoute;
