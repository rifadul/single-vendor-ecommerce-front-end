import React from "react";
import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductListing;
