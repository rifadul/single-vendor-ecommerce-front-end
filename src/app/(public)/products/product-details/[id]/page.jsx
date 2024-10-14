import ImageCarousel from "@/components/product/ImageCarousel";
import ProductDescriptionAndRatingTabs from "@/components/product/ProductDescriptionAndRatingTabs";
import ProductDetails from "@/components/product/ProductDetails";
import { PRODUCTS_API_URL } from "@/helpers/apiUrls";
import React from "react";

// Define banner API call functions
async function getProductDetails(id) {
    try {
        const url = `${PRODUCTS_API_URL}/${id}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store", // Ensure no caching happens
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Failed to fetch products");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}

async function ProductDetailsPage({ params }) {
    let product = null;
    let error = null;

    try {
        product = await getProductDetails(params.id);
    } catch (err) {
        error = err.message;
    }

    if (error) {
        return <div>Error loading product details: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto flex flex-col gap-12">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <ImageCarousel images={product?.data.all_images} />
                </div>
                <div className="w-full md:w-1/2 pl-5 md:pl-8">
                    <ProductDetails product={product?.data} />
                </div>
            </div>
            <div>
                <ProductDescriptionAndRatingTabs product={product?.data} />
            </div>
        </div>
    );
}

export default ProductDetailsPage;
