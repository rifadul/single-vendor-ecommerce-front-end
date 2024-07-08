import React from "react";

function FormCardLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center animate-pulse">
            <div className="bg-white p-12 rounded-lg shadow-light-gray w-full max-w-lg flex flex-col gap-12">
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
                <div className="h-44 bg-gray-200 rounded w-full mx-auto"></div>
                <div className="space-y-9">
                    <div className="space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mx-auto"></div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="h-10 bg-gray-200 rounded w-full mx-auto"></div>
                        <div className="h-10 bg-gray-200 rounded w-full mx-auto"></div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                        </div>

                        <div className="h-1 bg-gray-200 rounded w-full mx-auto my-2"></div>

                        <div className="h-12 bg-gray-200 rounded w-full mx-auto"></div>

                        <div className="h-4 bg-gray-200 rounded w-full mx-auto mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCardLoader;
