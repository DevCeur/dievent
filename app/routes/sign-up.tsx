import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

import { SignUpView } from "~/views/SignUpView";

export const meta = createMeta({ title: "Sign Up" });

export const loader = createAuthLoader({ isPrivate: false });

const SignUpRoute = () => {
  return <SignUpView />;
};

export default SignUpRoute;
