"use client";
import ProductCardSkeleton from "./ProductCardSkeleton";

function ProductPageSkeleton() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}

export default ProductPageSkeleton;
