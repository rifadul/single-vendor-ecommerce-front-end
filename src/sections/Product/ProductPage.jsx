"use client";

import Buttons from "@/components/Buttons";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import ProductListing from "@/components/product/ProductListing";
import { Drawer } from "antd";
import { useState } from "react";
import Icons from "../../../public/assets/Icons";

function ProductPage({ products }) {
    const [drawerVisible, setDrawerVisible] = useState(false); // Drawer state

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
    };
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row h-screen gap-6">
                {/* Product Filter */}
                <div className="hidden lg:block lg:w-1/4">
                    <FilterSidebar />
                </div>

                {/* Product List */}
                <div className="flex-1 overflow-y-auto scrollbar-hide px-4">
                    <div className="flex items-center justify-between mb-6">
                        {/* responsive filter button for small screens */}
                        <Buttons.IconWithLabelBtn
                            alt="cross-icon"
                            icon={Icons.filter}
                            width="w-6"
                            height="h-6"
                            onClick={showDrawer}
                            label="Filter"
                            className="lg:hidden"
                        />
                        <h1>{allProducts.length} Results</h1>
                    </div>

                    {products?.results?.length > 0 ? (
                        <ProductListing products={products?.results} />
                    ) : (
                        <p className="text-center text-gray-500">
                            No products found
                        </p>
                    )}
                </div>
            </div>

            {/* Drawer for small screens */}
            <Drawer
                title={
                    <div className="flex w-full justify-between">
                        <p className="text-neutral-800">Filter</p>
                        <Buttons.IconBtn
                            alt="cross-icon"
                            icon={Icons.close_neutral}
                            width="w-6"
                            height="h-6"
                            onClick={onClose}
                        />
                    </div>
                }
                placement="left"
                closable={false}
                onClose={onClose}
                open={drawerVisible}
                width={340}
            >
                <FilterSidebar />
            </Drawer>
        </div>
    );
}

export default ProductPage;

const allProducts = [
    {
        id: 1,
        name: "Emerald Green Embroidered Muslin Saree 11",
        price: 29.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    {
        id: 2,
        name: "Emerald Green Embroidered Muslin Saree Emerald Green Embroidered Muslin Saree Emerald Green Embroidered Muslin Saree",
        price: 39.99,
        image: "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893480_1280.jpg",
    },
    {
        id: 3,
        name: "Emerald Green Embroidered Muslin Saree",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    {
        id: 3,
        name: "Emerald Green Embroidered Muslin Saree",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    {
        id: 3,
        name: "Emerald Green Embroidered Muslin Saree",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    {
        id: 3,
        name: "Emerald Green Embroidered Muslin Saree",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    {
        id: 3,
        name: "Emerald Green Embroidered Muslin Saree",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    {
        id: 3,
        name: "Emerald Green Embroidered Muslin Saree",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    {
        id: 3,
        name: "Emerald Green Embroidered Muslin last",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png",
    },
    // Add more products here
];
