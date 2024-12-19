"use client";
import { useState } from "react";
import RatingSection from "./RatingSection";

function ProductDescriptionAndRatingTabs({ product }) {
    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className="flex space-x-6 border-b-[2px]">
                <button
                    className={`relative py-2 text-base focus:outline-none ${
                        activeTab === "description"
                            ? "text-blue-700 font-semibold"
                            : "text-neutral-300 hover:text-blue-700 font-medium"
                    }`}
                    onClick={() => handleTabClick("description")}
                >
                    Description
                    {activeTab === "description" && (
                        <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-700 rounded"></span>
                    )}
                </button>
                <button
                    className={`relative py-2 text-base focus:outline-none ${
                        activeTab === "rating"
                            ? "text-blue-700 font-semibold"
                            : "text-neutral-300 hover:text-blue-700 font-medium"
                    }`}
                    onClick={() => handleTabClick("rating")}
                >
                    Rating & Review
                    {activeTab === "rating" && (
                        <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-700 rounded"></span>
                    )}
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === "description" && (
                    <div
                        className="container mx-auto p-4"
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    />
                )}

                {activeTab === "rating" && <RatingSection data={product} />}
            </div>
        </div>
    );
}

export default ProductDescriptionAndRatingTabs;
