import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

import type { InputHTMLAttributes } from "react";

type TextInputProps = {
  withPasswordVisibility?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const iconClassName = "w-4 text-gray-500";

export const TextInput = ({
  type,
  withPasswordVisibility,
  ...inputProps
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = (e: React.MouseEvent) => {
    e.preventDefault();

    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      {withPasswordVisibility ? (
        <div className="w-full relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            className="flex-1 text-sm px-4 py-3 rounded-lg outline-none border border-slate-200 focus:border-brand-500 transition-all"
            {...inputProps}
          />

          <button
            className="absolute top-0 right-0 bottom-0 px-4"
            onClick={handleToggleShowPassword}
          >
            {showPassword ? (
              <EyeOffIcon className={iconClassName} />
            ) : (
              <EyeIcon className={iconClassName} />
            )}
          </button>
        </div>
      ) : (
        <input
          type={type || "text"}
          className="text-sm px-4 py-3 border border-slate-200 rounded-lg outline-none focus:border-brand-500 transition-all"
          {...inputProps}
        />
      )}
    </>
  );
};
