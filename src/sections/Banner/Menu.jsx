"use client";
import Image from "next/image";
import React, { useState } from "react";
import Icons from "../../../public/assets/Icons";

const Menu = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const categories = [
        { name: "Men", subcategories: ["Shirts", "Pants", "Shoes"] },
        { name: "Women", subcategories: ["Dresses", "Tops", "Shoes"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
        { name: "Kids", subcategories: ["T-Shirts", "Shorts", "Sneakers"] },
    ];

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className="bg-white h-[500px] overflow-y-auto scrollbar-hide">
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                        <button
                            className={`
                w-full flex  items-center text-xl
                justify-between text-left font-medium py-4 px-4
                ${
                    index !== categories.length - 1
                        ? "border-b border-neutral-20"
                        : ""
                }
                ${
                    openCategory === category.name
                        ? "text-magenta-600"
                        : "text-neutral-800"
                }`}
                            onClick={() => toggleCategory(category.name)}
                        >
                            {category.name}
                            <Image
                                src={Icons.right_arrow_gray}
                                alt="right arrow"
                                className={`w-6 h-6 duration-300 ${
                                    openCategory === category.name
                                        ? "rotate-90"
                                        : "rotate-0"
                                }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden text-neutral-800 text-base transition-max-height duration-500 ease-in-out ${
                                openCategory === category.name
                                    ? "max-h-40"
                                    : "max-h-0"
                            }`}
                        >
                            <ul className="pl-4">
                                {category.subcategories.map(
                                    (subcategory, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className={`mb-1 py-2 ${
                                                subIndex !==
                                                category.subcategories.length -
                                                    1
                                                    ? "border-b border-neutral-20"
                                                    : ""
                                            }`}
                                        >
                                            {subcategory}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
