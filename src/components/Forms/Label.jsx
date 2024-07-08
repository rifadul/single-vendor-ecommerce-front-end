import React from "react";

const Label = ({ isRequiredIconShow = false, children }) => {
    return (
        <label className="block tracking-wide text-neutral-300 font-poppins text-sm font-medium">
            {isRequiredIconShow && (
                <span className="mr-1 font-medium text-error-500 font-poppins text-center text-sm">
                    *
                </span>
            )}
            {children}
        </label>
    );
};

export default Label;
