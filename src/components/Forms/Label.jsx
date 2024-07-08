import React from "react";

const Label = ({ isRequiredIconShow = false, children }) => {
    return (
        <label className="block tracking-wide text-neutral-300 font-poppins text-sm font-medium">
            {isRequiredIconShow && (
                <span className="mr-1 font-medium text-required-500 text-center text-sm">
                    *
                </span>
            )}
            {children}
        </label>
    );
};

export default Label;
