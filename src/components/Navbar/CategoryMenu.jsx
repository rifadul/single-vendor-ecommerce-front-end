"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORY_WITH_PRODUCT_PATH } from "@/helpers/slug";
import { useCategoriesContext } from "@/contexts/CategoriesContext";
import Icons from "../../../public/assets/Icons";

const CategoryMenu = ({ onClose }) => {
    const router = useRouter();
    const [openCategory, setOpenCategory] = useState(null);
    const { categoriesData } = useCategoriesContext();

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    const handleNavigation = () => {
        router.push(CATEGORY_WITH_PRODUCT_PATH);
        onClose && onClose(false);
    };

    return (
        <div
            className={`bg-white ${
                onClose ? " " : "h-[500px]"
            }  overflow-y-auto scrollbar-hide`}
        >
            <ul>
                {categoriesData?.results?.map((category, index) => (
                    <li key={index} className="mb-2">
                        <button
                            className={`
                w-full flex  items-center text-xl
                justify-between text-left font-medium py-4 px-4
                ${
                    index !== categoriesData.length - 1
                        ? "border-b border-neutral-20"
                        : ""
                }
                ${
                    openCategory === category?.id
                        ? "text-magenta-600"
                        : "text-neutral-800"
                }`}
                            onClick={() =>
                                category?.subcategories?.length > 0
                                    ? toggleCategory(category?.id)
                                    : handleNavigation()
                            }
                        >
                            {category?.name}
                            {category?.subcategories?.length > 0 && (
                                <Image
                                    src={Icons.right_arrow_gray}
                                    alt="right arrow"
                                    className={`w-6 h-6 duration-300 ${
                                        openCategory === category?.id
                                            ? "rotate-90"
                                            : "rotate-0"
                                    }`}
                                />
                            )}
                        </button>
                        <div
                            className={`overflow-hidden text-neutral-800 text-base transition-max-height duration-500 ease-in-out ${
                                openCategory === category?.id
                                    ? "max-h-40"
                                    : "max-h-0"
                            }`}
                        >
                            <ul className="pl-4">
                                {category?.subcategories.map(
                                    (subcategory, subIndex) => (
                                        <li
                                            onClick={handleNavigation}
                                            key={subIndex}
                                            className={`mb-1 py-2 cursor-pointer ${
                                                subIndex !==
                                                category?.subcategories
                                                    ?.length -
                                                    1
                                                    ? "border-b border-neutral-20"
                                                    : ""
                                            }`}
                                        >
                                            {subcategory?.name}
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

export default CategoryMenu;
