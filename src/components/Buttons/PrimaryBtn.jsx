import React from "react";

const PrimaryBtn = ({ label, className, ...rest }) => {
    return (
        <button className={`${className}`} {...rest}>
            {label}
        </button>
    );
};

export default PrimaryBtn;
