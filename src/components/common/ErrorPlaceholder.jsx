import React from "react";

const ErrorPlaceholder = ({ message = "Please fill the input field" }) => {
    return (
        <p className="text-red-600 font-poppins font-light text-xs py-1">
            {message}
        </p>
    );
};

export default ErrorPlaceholder;
