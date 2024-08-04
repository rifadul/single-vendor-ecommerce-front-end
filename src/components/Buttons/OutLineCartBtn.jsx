"use client";
import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";
import Link from "next/link";
import { MY_CART_PATH } from "@/helpers/slug";
import { useCart } from "@/contexts/CartContext";

const OutlineCartBtn = ({ className, ...rest }) => {
    const { cart } = useCart();
    return (
        <Link href={MY_CART_PATH}>
            <div
                className={`hidden items-center gap-2 py-2 px-3 border rounded-sm border-white md:flex`}
                {...rest}
            >
                <Image
                    src={Icons.cart}
                    alt={"cart-image"}
                    width={24}
                    height={24}
                />
                <p className="text-white text-sm font-semibold">My Cart</p>
                <div className="px-2 py-0.5 bg-white rounded-full text-sm font-semibold text-neutral-700">
                    {/* {cart?.results[0]?.items?.length} */}
                </div>
            </div>
            <div className={`block relative md:hidden`} {...rest}>
                <Image
                    src={Icons.cart}
                    alt={"cart-image"}
                    width={24}
                    height={24}
                />
                <div className="px-1 absolute -top-2.5 left-5 bg-white rounded-full text-xs font-semibold text-neutral-700">
                    0
                </div>
            </div>
        </Link>
    );
};

export default OutlineCartBtn;
