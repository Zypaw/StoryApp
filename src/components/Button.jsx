// components/ui/button.jsx
import React from "react";
import clsx from "clsx";

export function Button({ children, className, variant = "solid", ...props }) {
  const base = "inline-flex items-center justify-center font-medium rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    solid: "bg-white text-black hover:bg-zinc-200 focus:ring-white",
    outline: "border border-white text-white hover:bg-white/10 focus:ring-white"
  };

  return (
    <button
      className={clsx(base, variants[variant], "px-4 py-2", className)}
      {...props}
    >
      {children}
    </button>
  );
}
