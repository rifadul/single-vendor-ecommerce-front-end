import ProductPageSkeleton from "@/components/common/Loader/ProductPageSkeleton";
import { PRODUCTS_API_URL } from "@/helpers/apiUrls";
import ProductPage from "@/sections/Product/ProductPage";
import React, { Suspense } from "react";

// Define banner API call functions
async function getProducts() {
    const res = await fetch(PRODUCTS_API_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

async function Product() {
    // Fetch banner data in parallel
    const [products] = await Promise.all([getProducts()]);
    return (
        <Suspense fallback={<ProductPageSkeleton />}>
            <ProductPage products={products} />
        </Suspense>
    );
}

export default Product;
