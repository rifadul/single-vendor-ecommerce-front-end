// components/ProductDetails.jsx
import React, { useState } from "react";
import { Rate, Button, Select } from "antd";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import Buttons from "../Buttons";

const ProductDetails = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(
        product.variants[0].colors[0]
    );
    const [quantity, setQuantity] = useState(1);

    const handleColorChange = (color) => {
        console.log("color", color);
        const variant = product.variants.find((v) =>
            v.colors.some((c) => c.id === color?.id)
        );
        setSelectedColor(variant.colors.find((c) => c.id === color?.id));
    };

    const handleQuantityChange = (type) => {
        setQuantity((prev) => (type === "increment" ? prev + 1 : prev - 1));
    };

    return (
        <div className="space-y-6 font-poppins">
            <div className="space-y-3">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-neutral-200">
                        {product.category.name}
                    </p>
                    <h2 className="text-2xl text-black-1000 font-medium leading-relaxed tracking-wide text-wrap line-clamp-3">
                        {product.name}
                    </h2>
                    <Rate disabled defaultValue={4} />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-neutral-300 text-base font-medium line-through font-poppins">
                        ${product.price}
                    </span>
                    <span className="text-xl font-semibold text-black-1000 font-poppins">
                        ${product.discount_price}
                    </span>
                    <span className="text-base font-medium text-error-500 font-poppins">
                        25% off
                    </span>
                </div>
            </div>

            {/* color */}
            <div className="space-y-3 mt-4">
                <h4 className="font-medium text-sm text-neutral-200">Colors</h4>
                <div className="grid grid-cols-8 gap-3">
                    {product?.variants?.map((variant, key) =>
                        variant?.colors?.map((color) => (
                            <span
                                key={color?.id}
                                //
                                className={`w-7 h-7 rounded-full cursor-pointer ${
                                    color?.id === selectedColor?.id
                                        ? "border-4 border-black-400"
                                        : ""
                                } `}
                                style={{ backgroundColor: color.color }}
                                onClick={() => handleColorChange(color)}
                            ></span>
                        ))
                    )}
                </div>
            </div>

            <hr className="w-full bg-neutral-300" />

            {/* size */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-8">
                    <div className="space-y-3">
                        <h4 className="font-medium text-sm text-neutral-200">
                            Sizes
                        </h4>
                        <div className="grid grid-cols-5 gap-3">
                            {product.variants.map((variant) => (
                                <div
                                    key={variant.size.id}
                                    className="w-full h-12 border-[1px] border-neutral-50 flex justify-center items-center"
                                >
                                    <p
                                        className="font-poppins cursor-pointer text-wrap line-clamp-1"
                                        title={variant.size.size}
                                    >
                                        {variant.size.size}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className=" flex p-4 gap-6 float-left items-center border-[1px] rounded-sm border-neutral-50">
                            <Image
                                alt="decrement"
                                src={Icons.minus}
                                className="cursor-pointer text-3xl"
                                onClick={() =>
                                    handleQuantityChange("decrement")
                                }
                            />
                            <span className="font-poppins text-black-1000 text-lg">
                                {quantity}
                            </span>
                            <Image
                                alt="decrement"
                                src={Icons.plus}
                                className="cursor-pointer"
                                onClick={() =>
                                    handleQuantityChange("increment")
                                }
                            />
                        </div>
                    </div>

                    <button className="border border-black-1000 py-4 text-base font-semibold font-poppins">
                        View Details
                    </button>
                </div>

                <Buttons.PrimaryBtn label={"Add to Cart"} />

                <div className="bg-neutral-20 font-poppins p-4 rounded-sm">
                    <p>
                        This product requires an additional 2-3 days beyond our
                        usual 4-7 days delivery time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
