"use client";
import React from "react";
import { Skeleton } from "antd";

const FilterSkeleton = () => {
    return (
        <div className="bg-white w-full p-4 overflow-y-auto scrollbar-hide">
            <Skeleton.Input active className="w-1/3 mb-4" size="default" />
            <div className="mb-4">
                <Skeleton.Input active className="w-2/3 mb-2" size="default" />
                <Skeleton active paragraph={{ rows: 3 }} title={false} />
            </div>
            <div className="mb-4">
                <Skeleton.Input active className="w-2/3 mb-2" size="default" />
                <Skeleton active paragraph={{ rows: 4 }} title={false} />
            </div>
            <div className="mb-4">
                <Skeleton.Input active className="w-2/3 mb-2" size="default" />
                <Skeleton.Button active className="w-full mb-2" />
                <Skeleton.Button active className="w-full mb-2" />
            </div>
            <div className="mb-4">
                <Skeleton.Input active className="w-2/3 mb-2" size="default" />
                <Skeleton active paragraph={{ rows: 5 }} title={false} />
            </div>
        </div>
    );
};

export default FilterSkeleton;
