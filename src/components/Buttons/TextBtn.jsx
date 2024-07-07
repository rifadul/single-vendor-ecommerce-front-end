import React from "react";

const TextBtn = ({ label, className, ...rest }) => {
    return (
        <button className={className} {...rest}>
            {label}
        </button>
    );
};

export default TextBtn;
