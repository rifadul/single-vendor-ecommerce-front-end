import React from "react";

const PrimaryBtn = ({ label, className, ...rest }) => {
  return (
    <button
      className={`bg-magenta-600 py-3 px-9 text-white font-semibold text-base ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default PrimaryBtn;
