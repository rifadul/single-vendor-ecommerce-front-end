/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for dropdown

export function CollapsibleOrderItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded-md p-4 mb-4 transition-all duration-500 ease-in-out">
            {/* Collapsed Header */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleCollapse}
            >
                {/* Left: Product Name */}
                <div className="text-lg text-neutral-700 font-medium">
                    {item.product.name}
                </div>

                {/* Right: Quantity and Total Price */}
                <div className="flex justify-end gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-sm text-neutral-300 font-semibold">
                            {item.quantity} items
                        </span>
                        <span className="text-base text-neutral-700 font-semibold">
                            ${item.total_price}
                        </span>
                    </div>

                    {/* Dropdown Icon */}
                    <div>
                        {isOpen ? (
                            <FaChevronUp className="text-neutral-700" />
                        ) : (
                            <FaChevronDown className="text-neutral-700" />
                        )}
                    </div>
                </div>
            </div>

            {/* Smooth Transition for Expanded Content */}
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
                {isOpen && (
                    <div className="mt-4">
                        {/* Product Image */}
                        <Image
                            src={item.product_variant.image}
                            alt={item.product.name}
                            width={128} // 32 * 4 (tailwind w-32)
                            height={128} // 32 * 4 (tailwind h-32)
                            className="mb-4 object-cover"
                        />

                        {/* Product Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        SKU:
                                    </strong>{" "}
                                    {item.product.sku}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Category:
                                    </strong>{" "}
                                    {item.product.category.name}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Description:
                                    </strong>{" "}
                                    {item.product.short_description}
                                </p>
                            </div>

                            <div>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Color:
                                    </strong>{" "}
                                    {item.product_variant.color}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Size:
                                    </strong>{" "}
                                    {item.product_variant.size.size}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Price at order:
                                    </strong>{" "}
                                    ${item.price_at_order_time}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Discounted Price:
                                    </strong>{" "}
                                    ${item.discount_price_at_order_time}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
