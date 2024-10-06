import React from "react";
import OrderItemSkeletonLoader from "@/components/common/Loader/Skeleton/OrderItemSkeletonLoader";

function OrderSkeletonLoader() {
    return (
        <div className="mt-6 space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
                <OrderItemSkeletonLoader key={index} />
            ))}
        </div>
    );
}

export default OrderSkeletonLoader;
