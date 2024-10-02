"use client";
import ProductPageSkeleton from "@/components/common/Loader/ProductPageSkeleton";
import { PRODUCTS_API_URL } from "@/helpers/apiUrls";
import ProductPage from "@/sections/Product/ProductPage";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

async function fetchProducts(params = "") {
    const res = await fetch(`${PRODUCTS_API_URL}${params ? `?${params}` : ""}`);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

function Product() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                // Convert searchParams to string
                const params = searchParams.toString();
                const productsData = await fetchProducts(params);
                setProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, [searchParams]);

    if (loading) {
        return <ProductPageSkeleton />;
    }

    return <ProductPage products={products} />;
}

export default Product;
