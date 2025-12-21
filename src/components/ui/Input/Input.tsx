import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-bold">{label}</label>}
      <input
        {...props}
        className="w-full rounded-xl border border-neutral-800 px-4 py-3 placeholder-gray-500 outline-none focus:ring-1 transition"
      />
    </div>
  );
};

export default Input;
