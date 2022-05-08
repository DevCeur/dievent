import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

import { SignInView } from "~/views/SignInView";

export const meta = createMeta({ title: "Sign In" });

export const loader = createAuthLoader({ isPrivate: false });

const SignInRoute = () => {
  return <SignInView />;
};

export default SignInRoute;
