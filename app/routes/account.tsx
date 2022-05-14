import { createMeta } from "~/utils/createMeta";
import { createAuthLoader } from "~/utils/createAuthLoader";

export const meta = createMeta({ title: "Account Settings" });

export const loader = createAuthLoader({
  isPrivate: true,
});

const AccountRoute = () => {
  return (
    <div>
      <p>Account</p>
    </div>
  );
};

export default AccountRoute;
