const { default: Image } = require("next/image");

import React from "react";
const WishlistItem = ({ item }) => {
    const { product } = item;
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <Image
                    src={product.images[0].image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-cover"
                />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">${product.price}</p>
                </div>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
                <button className="text-red-500 hover:text-red-700">-</button>
                <button className="ml-4 text-pink-500 hover:text-pink-700">
                    +
                </button>
            </div>
        </div>
    );
};

export default WishlistItem;
