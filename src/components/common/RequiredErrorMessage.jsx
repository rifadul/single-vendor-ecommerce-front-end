import React from "react";

function RequiredErrorMessage({ children, className }) {
    return (
        <p
            className={`text-required-500 font-poppins font-light text-sm py-1 ${className}`}
        >
            {children}
        </p>
    );
}

export default RequiredErrorMessage;
