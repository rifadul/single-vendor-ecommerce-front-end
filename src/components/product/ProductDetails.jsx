"use client";
import { useState, useEffect } from "react";
import { Rate } from "antd";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import Buttons from "../Buttons";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

const ProductDetails = ({ product }) => {
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState(product.variants[0]);
    const [selectedSize, setSelectedSize] = useState(
        product.variants[0].sizes[0]
    );
    const [quantity, setQuantity] = useState(1);
    const pathname = usePathname();

    useEffect(() => {
        setSelectedSize(selectedColor.sizes[0]);
        setQuantity(1); // Reset quantity when color changes
    }, [selectedColor]);

    useEffect(() => {
        setQuantity(1); // Reset quantity when size changes
    }, [selectedSize]);

    const handleColorChange = (color) => {
        const variant = product.variants.find((v) => v.color === color);
        setSelectedColor(variant);
    };

    const handleSizeChange = (size) => {
        const sizeVariant = selectedColor.sizes.find(
            (s) => s.size_id === size.size_id
        );
        setSelectedSize(sizeVariant);
    };

    const handleQuantityChange = (type) => {
        setQuantity((prev) => {
            if (type === "increment") {
                return prev < selectedSize.quantity ? prev + 1 : prev;
            } else {
                return prev > 1 ? prev - 1 : prev;
            }
        });
    };

    const handleAddToCart = () => {
        const productVariant = selectedSize.variant_id;
        addToCart(productVariant, quantity);
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
                        {/* ${product.discount_price} */}
                    </span>
                    <span className="text-base font-medium text-error-500 font-poppins">
                        25% off
                    </span>
                </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3 mt-4">
                <h4 className="font-medium text-sm text-neutral-200">Colors</h4>
                <div className="grid grid-cols-8 gap-3">
                    {product?.variants?.map((variant) => (
                        <span
                            key={variant.color}
                            className={`w-7 h-7 rounded-full cursor-pointer ${
                                variant.color === selectedColor.color
                                    ? "border-4 border-black-400"
                                    : ""
                            } `}
                            style={{ backgroundColor: variant.color }}
                            onClick={() => handleColorChange(variant.color)}
                        ></span>
                    ))}
                </div>
            </div>

            <hr className="w-full bg-neutral-300" />

            {/* Size Selection */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-8">
                    <div className="space-y-3">
                        <h4 className="font-medium text-sm text-neutral-200">
                            Sizes
                        </h4>
                        <div className="grid grid-cols-5 gap-3">
                            {selectedColor.sizes.map((size) => (
                                <div
                                    key={size.size_id}
                                    className={`w-full h-12 border-[1px] flex justify-center items-center cursor-pointer ${
                                        size.size_id === selectedSize.size_id
                                            ? "border-magenta-500"
                                            : "border-neutral-50"
                                    }`}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    <p
                                        className="font-poppins cursor-pointer text-wrap line-clamp-1"
                                        title={size.size}
                                    >
                                        {size.size}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex p-4 gap-6 float-left items-center border-[1px] rounded-sm border-neutral-50">
                            <Image
                                alt="decrement"
                                src={Icons.minus}
                                className={`cursor-pointer text-3xl ${
                                    quantity === 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleQuantityChange("decrement")
                                }
                            />
                            <span className="font-poppins text-black-1000 text-lg">
                                {quantity}
                            </span>
                            <Image
                                alt="increment"
                                src={Icons.plus}
                                className={`cursor-pointer text-3xl ${
                                    quantity >= selectedSize.quantity
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleQuantityChange("increment")
                                }
                            />
                        </div>
                    </div>

                    {!pathname.includes(PRODUCT_DETAILS_PATH) && (
                        <Link href={`${PRODUCT_DETAILS_PATH}/${product?.id}`}>
                            <button className="border border-black-1000 py-4 text-base font-semibold font-poppins w-full">
                                View Details
                            </button>
                        </Link>
                    )}
                </div>

                <Buttons.PrimaryBtn
                    label={"Add to Cart"}
                    onClick={handleAddToCart}
                />

                <div className="bg-neutral-20 font-poppins p-4 rounded-sm">
                    <p>
                        This product requires an additional 2-3 days beyond our
                        usual 4-7 days delivery time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
