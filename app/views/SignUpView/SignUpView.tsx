import { Form, Link, useActionData, useNavigate } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import { Navlink } from "~/components/Navlink";
import { TextInput } from "~/components/TextInput";

export const SignUpView = () => {
  const navigate = useNavigate();
  const actionData = useActionData();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-[85%] h-screen max-w-screen-xl mx-auto py-12 grid grid-cols-2 gap-10">
      <div
        className="w-full h-full py-6 px-8 flex flex-col justify-between rounded-3xl bg-center bg-cover"
        style={{ backgroundImage: `url(/assets/images/sign-up-hero.jpeg)` }}
      >
        <div className="flex justify-between items-center">
          <Link to={ROUTE.HOME} className="text-xl text-white font-semibold">
            DiEvent
          </Link>

          <button
            role="link"
            onClick={handleGoBack}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Go Back
          </button>
        </div>

        <div className="w-full bg-slate-600/20 backdrop-blur p-6 rounded-3xl">
          <h1 className="text-white text-4xl font-semibold mb-12">
            For Your Conference, <br /> Your master class, <br />
            Your Party
          </h1>

          <p className="text-gray-300">
            Whatever you want to plan and make people assist, you can use
            DiEvent to manage it the right and easy way!
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="w-full absolute flex justify-end">
          <Navlink to={ROUTE.SIGN_IN} special>
            Sign In
          </Navlink>
        </div>

        <div className="h-full flex flex-1 flex-col justify-center items-center">
          <div>
            <h1 className="text-center text-2xl font-semibold mb-2">
              Let's Create an Account
            </h1>

            <p className="text-sm text-gray-400">
              A few steps and you'll be ready to manage your next event!
            </p>
          </div>

          <hr className="w-full max-w-[425px] my-8" />

          <Form
            method="post"
            className="w-full max-w-[400px] mb-6 flex flex-col space-y-6"
          >
            <div className="w-full grid grid-cols-2 gap-6">
              <label>
                <span>Name:</span>
                <TextInput name="name" />
                {actionData?.errors?.name && (
                  <span className="error-message">
                    {actionData.errors.name}
                  </span>
                )}
              </label>

              <label>
                <span>Username:</span>
                <TextInput name="username" />
                {actionData?.errors?.username && (
                  <span className="error-message">
                    {actionData.errors.username}
                  </span>
                )}
              </label>
            </div>

            <label>
              <span>Email:</span>
              <TextInput type="email" name="email" />
              {actionData?.errors?.email && (
                <span className="error-message">{actionData.errors.email}</span>
              )}
            </label>

            <label>
              <span>Password:</span>
              <TextInput
                type="password"
                name="password"
                placeholder="+6 characters"
                withPasswordVisibility
              />
              {actionData?.errors?.password && (
                <span className="error-message">
                  {actionData.errors.password}
                </span>
              )}
            </label>

            <button type="submit" className="button-solid">
              Create Account
            </button>
          </Form>

          <span className="text-xs text-gray-400">
            Already have an account?{" "}
            <Link
              to={ROUTE.SIGN_IN}
              className="hover:text-brand-500 transition-colors"
            >
              Sign In
            </Link>
          </span>

          {actionData?.errors?.server && (
            <span className="error-message">{actionData.errors.server}</span>
          )}
        </div>
      </div>
    </div>
  );
};
