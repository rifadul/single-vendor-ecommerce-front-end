"use client";
import { Skeleton } from "antd";
import React from "react";

function ProductCardSkeleton() {
    return (
        <div className="relative rounded flex flex-col items-center">
            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gray-200" />
            </div>
            <div className="w-full mt-2">
                <Skeleton
                    active
                    paragraph={{ rows: 1 }}
                    title={false}
                    className="w-full mb-2"
                />
                <Skeleton.Button active className="w-full" />
            </div>
        </div>
    );
}

export default ProductCardSkeleton;
