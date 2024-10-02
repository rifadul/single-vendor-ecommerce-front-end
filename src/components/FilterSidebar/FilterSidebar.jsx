"use client";
import React, { useEffect, useState } from "react";
import { Collapse, Checkbox, Slider, InputNumber, Button, Radio } from "antd";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Icons from "../../../public/assets/Icons";
import {
    PRODUCT_COLORS_API_URL,
    PRODUCT_PRICE_STATS_API_URL,
} from "@/helpers/apiUrls"; // Update URLs accordingly
import { useCategoriesContext } from "@/contexts/CategoriesContext"; // Use CategoriesContext
import FilterSkeleton from "@/components/common/Loader/FilterSkeleton"; // Assume you have a skeleton component

const FilterSidebar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { categoriesData } = useCategoriesContext(); // Get categories from context

    // States for API data
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState({ colors: true, price: true });

    // States for selected filters
    const initialCategories = searchParams.get("category")?.split(",") || [];
    const initialColors = searchParams.get("color")?.split(",") || [];
    const initialPriceRange = [
        Number(searchParams.get("min_price")) || 0,
        Number(searchParams.get("max_price")) || 0,
    ];
    const initialAvailability = searchParams.get("in_stock") || "";
    const initialSortBy = searchParams.get("ordering") || "";

    const [selectedCategories, setSelectedCategories] =
        useState(initialCategories);
    const [selectedColors, setSelectedColors] = useState(initialColors);
    const [selectedPriceRange, setSelectedPriceRange] =
        useState(initialPriceRange);
    const [selectedAvailability, setSelectedAvailability] =
        useState(initialAvailability);
    const [selectedSortBy, setSelectedSortBy] = useState(initialSortBy);

    // Fetch Colors using fetch directly
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const response = await fetch(PRODUCT_COLORS_API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch colors");
                }
                const data = await response.json();
                // Filter out duplicate colors based on the `name` property
                const uniqueColors = data.data.reduce((acc, current) => {
                    const duplicate = acc.find(
                        (color) => color.name === current.name
                    );
                    if (!duplicate) {
                        acc.push(current);
                    }
                    return acc;
                }, []);
                setColors(uniqueColors);
            } catch (error) {
                console.error("Failed to fetch colors:", error);
            } finally {
                setLoading((prev) => ({ ...prev, colors: false }));
            }
        };
        fetchColors();
    }, []);

    // Fetch Price Range
    useEffect(() => {
        const fetchPriceRange = async () => {
            try {
                const response = await fetch(PRODUCT_PRICE_STATS_API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch price range");
                }
                const data = await response.json();
                setPriceRange([data.min_price, data.max_price]);
                setSelectedPriceRange([
                    Number(searchParams.get("min_price")) || data.min_price,
                    Number(searchParams.get("max_price")) || data.max_price,
                ]);
            } catch (error) {
                console.error("Failed to fetch price range:", error);
            } finally {
                setLoading((prev) => ({ ...prev, price: false }));
            }
        };

        fetchPriceRange();
    }, [searchParams]);

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

        if (filters.availability !== "") {
            params.set("in_stock", filters.availability);
        } else {
            params.delete("in_stock");
        }

        if (filters.sortBy) {
            params.set("ordering", filters.sortBy);
        } else {
            params.delete("ordering");
        }

        router.replace(`?${params.toString()}`);
        console.log("Updated filters:", filters); // Console log after filters are updated
    };

    // Handlers for filters
    const handleCategoryChange = (values) => {
        setSelectedCategories(values);
        updateUrlParams({
            category: values,
            color: selectedColors,
            price: selectedPriceRange,
            availability: selectedAvailability,
            sortBy: selectedSortBy,
        });
    };

    const handleColorChange = (values) => {
        setSelectedColors(values);
        updateUrlParams({
            category: selectedCategories,
            color: values,
            price: selectedPriceRange,
            availability: selectedAvailability,
            sortBy: selectedSortBy,
        });
    };

    const handlePriceChange = (value) => {
        setSelectedPriceRange(value);
        updateUrlParams({
            category: selectedCategories,
            color: selectedColors,
            price: value,
            availability: selectedAvailability,
            sortBy: selectedSortBy,
        });
    };

    const handleAvailabilityChange = (e) => {
        console.log("e.target.value", e.target.value);
        setSelectedAvailability(e.target.value);
        updateUrlParams({
            category: selectedCategories,
            color: selectedColors,
            price: selectedPriceRange,
            availability: e.target.value,
            sortBy: selectedSortBy,
        });
    };

    const handleSortByChange = (e) => {
        setSelectedSortBy(e.target.value);
        updateUrlParams({
            category: selectedCategories,
            color: selectedColors,
            price: selectedPriceRange,
            availability: selectedAvailability,
            sortBy: e.target.value,
        });
    };

    // Filter out categories that have a parent
    const filteredCategories =
        categoriesData?.results?.filter((category) => !category.parent) || [];

    // Render category tree
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
        setSelectedPriceRange([priceRange[0], priceRange[1]]); // Reset to initial values
        setSelectedAvailability("");
        setSelectedSortBy("");

        router.replace(window.location.pathname);
    };

    // Conditional rendering based on loading state
    if (loading.colors || loading.price) {
        return <FilterSkeleton />;
    }

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
                    defaultActiveKey={[
                        "category",
                        "price",
                        "color",
                        "availability",
                        "sortBy",
                    ]}
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

                    {/* Sort By Filter */}
                    <Collapse.Panel
                        header="Sort By"
                        key="sortBy"
                        className="filter-panel"
                    >
                        <Radio.Group
                            className="flex flex-col"
                            value={selectedSortBy}
                            onChange={handleSortByChange}
                        >
                            <Radio
                                value="price"
                                className="font-poppins filter-option-style"
                            >
                                Price
                            </Radio>
                            <Radio
                                value="popularity"
                                className="font-poppins filter-option-style"
                            >
                                Popularity
                            </Radio>
                            <Radio
                                value="rating"
                                className="font-poppins filter-option-style"
                            >
                                Rating
                            </Radio>
                        </Radio.Group>
                    </Collapse.Panel>

                    {/* Availability Filter */}
                    <Collapse.Panel
                        header="Availability"
                        key="availability"
                        className="filter-panel"
                    >
                        <Radio.Group
                            className="flex flex-col"
                            value={selectedAvailability}
                            onChange={handleAvailabilityChange}
                        >
                            <Radio
                                value="true"
                                className="font-poppins filter-option-style"
                            >
                                In Stock
                            </Radio>
                            <Radio
                                value="false"
                                className="font-poppins filter-option-style"
                            >
                                Out of Stock
                            </Radio>
                        </Radio.Group>
                    </Collapse.Panel>

                    {/* Price Filter */}
                    <Collapse.Panel
                        header="Price"
                        key="price"
                        className="filter-panel"
                    >
                        <Slider
                            range
                            min={priceRange[0]}
                            max={priceRange[1]}
                            value={selectedPriceRange}
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
                                min={priceRange[0]}
                                max={priceRange[1]}
                                value={selectedPriceRange[0]}
                                onChange={(value) =>
                                    handlePriceChange([
                                        value,
                                        selectedPriceRange[1],
                                    ])
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
                                min={priceRange[0]}
                                max={priceRange[1]}
                                value={selectedPriceRange[1]}
                                onChange={(value) =>
                                    handlePriceChange([
                                        selectedPriceRange[0],
                                        value,
                                    ])
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
                            {colors.map((color) => (
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
