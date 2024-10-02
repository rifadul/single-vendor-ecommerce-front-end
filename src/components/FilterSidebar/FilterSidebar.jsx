"use client";
import React, { useState } from "react";
import { Collapse, Checkbox, Slider, InputNumber, Button } from "antd";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Icons from "../../../public/assets/Icons";

// Static Data
const staticCategories = [
    {
        id: "6c82805f-0870-44d2-bb8e-8a918d7b7f70",
        name: "Shirt",
        slug: "shirt",
        parent: "83b1db32-cc68-4531-8e05-bec3916788c5",
        subcategories: [],
    },
    {
        id: "61aaa6f5-90c7-45be-aa99-844daa6f4514",
        name: "Computer",
        slug: "computer",
        parent: null,
        subcategories: [],
    },
    {
        id: "f47e8710-cfed-4685-af22-32e0df629dcd",
        name: "Short Panjabi",
        slug: "short-panjabi",
        parent: "b0ec08ab-9b15-409c-9c14-d4d30e1bc438",
        subcategories: [],
    },
    {
        id: "b0ec08ab-9b15-409c-9c14-d4d30e1bc438",
        name: "Panjabi",
        slug: "panjabi",
        parent: "83b1db32-cc68-4531-8e05-bec3916788c5",
        subcategories: [
            {
                id: "f47e8710-cfed-4685-af22-32e0df629dcd",
                name: "Short Panjabi",
                slug: "short-panjabi",
                parent: "b0ec08ab-9b15-409c-9c14-d4d30e1bc438",
                subcategories: [],
            },
        ],
    },
    {
        id: "83b1db32-cc68-4531-8e05-bec3916788c5",
        name: "Men",
        slug: "men",
        parent: null,
        subcategories: [
            {
                id: "6c82805f-0870-44d2-bb8e-8a918d7b7f70",
                name: "Shirt",
                slug: "shirt",
                parent: "83b1db32-cc68-4531-8e05-bec3916788c5",
                subcategories: [],
            },
            {
                id: "b0ec08ab-9b15-409c-9c14-d4d30e1bc438",
                name: "Panjabi",
                slug: "panjabi",
                parent: "83b1db32-cc68-4531-8e05-bec3916788c5",
                subcategories: [
                    {
                        id: "f47e8710-cfed-4685-af22-32e0df629dcd",
                        name: "Short Panjabi",
                        slug: "short-panjabi",
                        parent: "b0ec08ab-9b15-409c-9c14-d4d30e1bc438",
                        subcategories: [],
                    },
                ],
            },
        ],
    },
];

const staticPriceRange = { min_price: 257, max_price: 12342 };
const staticColors = [
    { code: "#FFFFFF", name: "White" },
    { code: "#52CCFF", name: "Blue" },
    { code: "#29FFA3", name: "Green" },
    { code: "#8CFF69", name: "Green" },
    { code: "#2BA2FF", name: "Blue" },
    { code: "#2C7DFF", name: "Blue" },
    { code: "#3EFFDB", name: "Cyan" },
    { code: "#161398", name: "Blue" },
];

const FilterSidebar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Extract initial selected filters from URL parameters
    const initialCategories = searchParams.get("category")?.split(",") || [];
    const initialColors = searchParams.get("color")?.split(",") || [];
    const initialPriceRange = [
        Number(searchParams.get("min_price")) || staticPriceRange.min_price,
        Number(searchParams.get("max_price")) || staticPriceRange.max_price,
    ];

    const [selectedCategories, setSelectedCategories] =
        useState(initialCategories);
    const [selectedColors, setSelectedColors] = useState(initialColors);
    const [priceRange, setPriceRange] = useState(initialPriceRange);

    // Update URL parameters and state when filters are changed
    const updateUrlParams = (filters) => {
        const params = new URLSearchParams(searchParams.toString());

        if (filters.category.length) {
            params.set("category", filters.category.join(","));
        } else {
            params.delete("category");
        }

        if (filters.color.length) {
            params.set("color", filters.color.join(","));
        } else {
            params.delete("color");
        }

        if (filters.price) {
            params.set("min_price", filters.price[0]);
            params.set("max_price", filters.price[1]);
        } else {
            params.delete("min_price");
            params.delete("max_price");
        }

        router.push(`?${params.toString()}`);
        console.log("Updated filters:", filters); // Console log after filters are updated
    };

    const handleCategoryChange = (values) => {
        setSelectedCategories(values);
        updateUrlParams({
            category: values,
            color: selectedColors,
            price: priceRange,
        });
    };

    const handleColorChange = (values) => {
        setSelectedColors(values);
        updateUrlParams({
            category: selectedCategories,
            color: values,
            price: priceRange,
        });
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
        updateUrlParams({
            category: selectedCategories,
            color: selectedColors,
            price: value,
        });
    };

    // Filter out categories that have a parent
    const filteredCategories = staticCategories.filter(
        (category) => !category.parent
    );

    const renderCategoryTree = (categories) => {
        return categories.map((category) => (
            <div key={category.id} className="ml-4">
                <Checkbox
                    value={category.slug}
                    className="font-poppins filter-option-style"
                >
                    {category.name}
                </Checkbox>
                {category.subcategories &&
                    category.subcategories.length > 0 && (
                        <div className="ml-4">
                            {renderCategoryTree(category.subcategories)}
                        </div>
                    )}
            </div>
        ));
    };

    // Function to clear all filters
    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedColors([]);
        setPriceRange([staticPriceRange.min_price, staticPriceRange.max_price]); // Reset to initial values (you may need to adjust based on your default)

        router.replace(window.location.pathname);
    };

    return (
        <div className="bg-white overflow-y-auto scrollbar-hide">
            <div className="flex items-center justify-between px-4 py-5 border-b border-borderColor">
                <h2 className="text-xl font-semibold hidden lg:block">
                    Filter
                </h2>
                <Button
                    type="link"
                    onClick={clearAllFilters}
                    className="text-red-500 hover:text-red-700"
                >
                    Clear All
                </Button>
            </div>

            <div className="py-3">
                <Collapse
                    ghost
                    defaultActiveKey={["category", "price", "color"]}
                    bordered={false}
                    className="filter-collapse font-poppins"
                    expandIconPosition="end"
                    expandIcon={({ isActive }) => (
                        <Image
                            src={Icons.right_arrow_gray}
                            alt="right arrow"
                            className={`w-6 h-6 duration-300 ${
                                isActive ? "rotate-90" : "rotate-0"
                            }`}
                        />
                    )}
                >
                    {/* Category Filter */}
                    <Collapse.Panel
                        header="Category"
                        key="category"
                        className="filter-panel"
                    >
                        <Checkbox.Group
                            className="flex flex-col"
                            value={selectedCategories}
                            onChange={handleCategoryChange}
                        >
                            {renderCategoryTree(filteredCategories)}
                        </Checkbox.Group>
                    </Collapse.Panel>

                    {/* Price Filter */}
                    <Collapse.Panel
                        header="Price"
                        key="price"
                        className="filter-panel"
                    >
                        <Slider
                            range
                            min={staticPriceRange.min_price}
                            max={staticPriceRange.max_price}
                            value={priceRange}
                            onChange={handlePriceChange}
                        />
                        <div className="flex justify-between items-center mt-4">
                            <InputNumber
                                controls={false}
                                prefix={
                                    <span className="text-neutral-700 text-sm font-medium">
                                        $
                                    </span>
                                }
                                min={staticPriceRange.min_price}
                                max={staticPriceRange.max_price}
                                value={priceRange[0]}
                                onChange={(value) =>
                                    handlePriceChange([value, priceRange[1]])
                                }
                                className="font-poppins filter-option-style"
                            />
                            <InputNumber
                                controls={false}
                                prefix={
                                    <span className="text-neutral-700 text-sm font-medium">
                                        $
                                    </span>
                                }
                                min={staticPriceRange.min_price}
                                max={staticPriceRange.max_price}
                                value={priceRange[1]}
                                onChange={(value) =>
                                    handlePriceChange([priceRange[0], value])
                                }
                                className="font-poppins filter-option-style"
                            />
                        </div>
                    </Collapse.Panel>

                    {/* Color Filter */}
                    <Collapse.Panel
                        header="Color"
                        key="color"
                        className="filter-panel"
                    >
                        <Checkbox.Group
                            className="flex flex-col"
                            value={selectedColors}
                            onChange={handleColorChange}
                        >
                            {staticColors.map((color) => (
                                <Checkbox
                                    key={color.code}
                                    value={color.code}
                                    className="font-poppins filter-option-style"
                                >
                                    {color.name}
                                </Checkbox>
                            ))}
                        </Checkbox.Group>
                    </Collapse.Panel>
                </Collapse>
            </div>
        </div>
    );
};

export default FilterSidebar;
