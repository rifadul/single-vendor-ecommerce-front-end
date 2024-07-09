import ProductPageSkeleton from "@/components/common/Loader/ProductPageSkeleton";
import ProductPage from "@/sections/Product/ProductPage";
import React, { Suspense } from "react";

function Product() {
    return (
        <Suspense fallback={<ProductPageSkeleton />}>
            <ProductPage />
        </Suspense>
    );
}

export default Product;
