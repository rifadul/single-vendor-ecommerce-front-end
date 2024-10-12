import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";
import { useCart } from "@/contexts/CartContext";

const CartItem = ({ item }) => {
    const { updateCartItem, removeCartItem } = useCart();

    const handleCartUpdate = (actionName) => {
        let value =
            actionName === "increment"
                ? item?.quantity + 1
                : item?.quantity - 1;
        updateCartItem(item?.id, value);
    };

    return (
        <div className="flex justify-between items-center p-4 border-b">
            {/* product */}
            <div className="w-full md:w-6/12">
                <div className="flex items-center gap-3 w-full  mb-4 md:mb-0">
                    <Image
                        alt=""
                        src={item?.product_variant?.image}
                        width={74}
                        height={74}
                    />
                    <div className="flex flex-col gap-1 w-full pr-1">
                        <h4 className="text-black-1000 text-sm font-poppins">
                            {item?.product_variant?.product?.name}
                        </h4>

                        <p className="text-sm text-neutral-300 inline-block md:hidden">
                            Price: <span className="text-neutral-300">$</span>{" "}
                            {item?.product_variant?.product?.price}
                        </p>

                        <p className="text-sm text-neutral-300 md:inline-block hidden ">
                            Product Code:{" "}
                            <span className="text-black-1000">
                                {item?.product_variant?.product?.sku}
                            </span>
                        </p>

                        {/* quantity */}
                        <div className="flex justify-between items-center w-full md:hidden">
                            <div className="flex items-center justify-evenly border px-4 py-2">
                                <button
                                    onClick={handleCartUpdate}
                                    disabled={item?.quantity === 1}
                                >
                                    -
                                </button>
                                <span className="px-2 text-black">
                                    {item?.quantity}
                                </span>
                                <button
                                    onClick={() =>
                                        handleCartUpdate("increment")
                                    }
                                >
                                    +
                                </button>
                            </div>
                            {/* action button */}
                            <button className="text-red-500 ml-4">
                                <Image alt="delete button" src={Icons.trash} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* price */}
            <p className="font-medium text-black-1000 hidden md:w-2/12 md:inline-block text-left">
                <span className="text-neutral-300">$</span>{" "}
                {item?.product_variant?.product?.price}
            </p>
            {/* Quantity */}
            <div className="hidden md:inline-block font-medium w-1/12 text-center">
                <div className="flex items-center justify-evenly border px-4 py-2">
                    <button
                        onClick={handleCartUpdate}
                        disabled={item?.quantity === 1}
                    >
                        -
                    </button>
                    <span className="px-2 text-black">{item?.quantity}</span>
                    <button onClick={() => handleCartUpdate("increment")}>
                        +
                    </button>
                </div>
            </div>
            {/* total price */}
            <p className="hidden text-black-1000 md:inline-block font-medium w-2/12 text-right">
                <span className="text-neutral-300">$</span> {item?.total_price}
            </p>
            {/* action button */}
            <div className="hidden md:inline-block font-medium w-1/12 text-center">
                <button
                    className="text-red-500 ml-4"
                    onClick={() => removeCartItem(item?.id)}
                >
                    <Image alt="delete button" src={Icons.trash} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
