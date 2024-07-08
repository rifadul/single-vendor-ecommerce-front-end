import React from "react";

function RequiredErrorMessage({ children, className }) {
    return (
        <p
            className={`text-error-500 font-poppins  font-normal text-sm py-1 ${className}`}
        >
            {children}
        </p>
    );
}

export default RequiredErrorMessage;
