import React from "react";

function FormCardContainer({ cardTitle, children }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-12 rounded-lg shadow-light-gray w-full max-w-lg flex flex-col gap-12">
                <h3 className="text-xl text-black-800 font-bold text-center border-b border-dark-gray py-4">
                    {cardTitle}
                </h3>
                {children}
            </div>
        </div>
    );
}

export default FormCardContainer;
