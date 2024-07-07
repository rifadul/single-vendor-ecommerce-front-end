import React from "react";

function FormContainer({ children, customPaddingForModal = false }) {
    return (
        <div className={`bg-[#FFF] ${customPaddingForModal ? "p-0" : "p-8"}`}>
            {children}
        </div>
    );
}

export default FormContainer;
