"use client";
import { useCart } from "@/contexts/CartContext";
import { CHECKOUT_PATH, PRODUCTS_PATH } from "@/helpers/slug";
import { Spin } from "antd";
import Link from "next/link";
import CartItem from "./CartItem";
import CartTableHeading from "./CartTableHeading";
import CouponCode from "./CouponCode";
import OrderSummary from "./OrderSummary";

const MyCartPage = () => {
    const { cart, loading, applyCoupon } = useCart();

    return (
        <div className="container mx-auto">
            <Spin fullscreen spinning={loading} />
            <h2 className="font-semibold text-black-1000 text-xl mb-4">
                Your cart items{" "}
                <span className="text-neutral-600">
                    ({cart?.items?.length || 0} Items)
                </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded shadow-md px-4 py-6">
                        {cart?.items?.length > 0 && (
                            <>
                                <CartTableHeading />

                                {cart?.items?.map((item, index) => (
                                    <CartItem key={index} item={item} />
                                ))}
                            </>
                        )}
                        <div
                            className={`flex items-center flex-col ${
                                cart?.items?.length > 0
                                    ? "justify-end"
                                    : "justify-center"
                            } `}
                        >
                            {cart?.items?.length === 0 && (
                                <div className="text-neutral-300 text-lg">
                                    No items added
                                </div>
                            )}

                            <Link href={PRODUCTS_PATH}>
                                <button className="bg-blue-900 text-center font-semibold text-white px-6 py-4 rounded-sm my-4">
                                    CONTINUE SHOPPING
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="px-4 pt-2 pb-6 bg-white rounded flex flex-col gap-6">
                    <h2 className="font-semibold text-base text-center text-black-1000">
                        ORDER SUMMARY
                    </h2>
                    <OrderSummary
                        totalItems={cart?.items?.length}
                        subtotal={cart?.subtotal}
                        tax={cart?.tax}
                        shipping={cart?.shipping}
                        discount={cart?.discount}
                        total={cart?.total}
                        coupon={cart?.coupon}
                    />
                    <CouponCode applyCoupon={applyCoupon} />
                    <Link href={CHECKOUT_PATH}>
                        <button className="bg-blue-900 font-semibold text-white px-6 w-full py-4 rounded-sm">
                            CHECKOUT
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyCartPage;
