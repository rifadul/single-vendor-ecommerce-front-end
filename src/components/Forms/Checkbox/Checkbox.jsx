import React from "react";
import Label from "../Label";

function Checkbox({ label, ...rest }) {
  return (
    <div className="flex space-x-2 items-center">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-magenta-500 text-magenta-500 accent-magenta-600"
        {...rest}
      />
      <Label>{label}</Label>
    </div>
  );
}

export default Checkbox;
