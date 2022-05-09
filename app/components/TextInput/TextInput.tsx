import type { InputHTMLAttributes } from "react";

export const TextInput = ({
  type,
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type || "text"}
      className="text-sm px-4 py-3 border border-slate-200 rounded-lg outline-none focus:border-brand-500 transition-colors"
      {...inputProps}
    />
  );
};
