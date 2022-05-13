import { Form, Link, useActionData, useNavigate } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import { TextInput } from "~/components/TextInput";

export const SignInView = () => {
  const navigate = useNavigate();
  const actionData = useActionData();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-[85%] h-screen max-w-screen-xl mx-auto py-12 grid grid-cols-2 gap-10">
      <div className="relative">
        <div className="w-full absolute">
          <Link to={ROUTE.HOME} className="text-xl text-gray-900 font-semibold">
            DiEvent
          </Link>
        </div>

        <div className="h-full flex flex-1 flex-col justify-center items-center">
          <div>
            <h1 className="text-center text-2xl font-semibold mb-2">
              Welcome Back!
            </h1>
          </div>

          <hr className="w-full max-w-[425px] my-8" />

          <Form
            method="post"
            className="w-full max-w-[350px] mb-6 flex flex-col space-y-6"
          >
            <label>
              <span>Email:</span>
              <TextInput type="email" name="email" />
              {actionData?.errors?.email && (
                <span className="error-message">{actionData.errors.email}</span>
              )}
            </label>

            <label>
              <div className="flex justify-between items-center mb-2">
                <span>Password:</span>

                <Link
                  to={ROUTE.HOME}
                  className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
              <TextInput
                type="password"
                name="password"
                withPasswordVisibility
              />
              {actionData?.errors?.password && (
                <span className="error-message">
                  {actionData.errors.password}
                </span>
              )}
            </label>

            {actionData?.errors?.wrongCredentials && (
              <span className="error-message">
                {actionData.errors.wrongCredentials}
              </span>
            )}

            <button type="submit" className="button-solid">
              Sign In
            </button>
          </Form>

          <span className="text-xs text-gray-400">
            Don't an account?{" "}
            <Link
              to={ROUTE.SIGN_UP}
              className="hover:text-brand-500 transition-colors"
            >
              Sign Up
            </Link>
          </span>

          {actionData?.errors?.server && (
            <span className="error-message">{actionData.errors.server}</span>
          )}
        </div>
      </div>

      <div
        className="w-full h-full py-6 px-8 flex flex-col justify-between rounded-3xl bg-center bg-cover"
        style={{ backgroundImage: `url(/assets/images/sign-in-hero.jpeg)` }}
      >
        <div className="flex justify-between items-center">
          <button
            role="link"
            onClick={handleGoBack}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Go Back
          </button>

          <Link
            to={ROUTE.SIGN_UP}
            className="text-sm text-white border font-medium border-white px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-white transition-colors"
          >
            Create Account
          </Link>
        </div>

        <div className="w-full bg-slate-600/20 backdrop-blur p-6 rounded-3xl">
          <h1 className="text-gray-900 text-4xl font-semibold mb-12">
            Hey! Nice to see you again
          </h1>

          <p className="text-gray-800">
            Your events are important for us, and they are always protected in
            our platform.
          </p>
        </div>
      </div>
    </div>
  );
};
