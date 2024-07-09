"use client";
import React from "react";
import FilterSkeleton from "./FilterSkeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Skeleton } from "antd";

function ProductPageSkeleton() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row h-screen gap-6">
                <FilterSkeleton />

                {/* Product List */}
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    <Skeleton
                        active
                        paragraph={{ rows: 1 }}
                        title={false}
                        className="w-full mb-2"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPageSkeleton;
