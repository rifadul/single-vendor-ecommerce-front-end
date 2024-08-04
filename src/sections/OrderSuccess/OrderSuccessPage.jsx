"use client";

import { useOrder } from "@/contexts/OrderContext";
import { Spin } from "antd";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Images from "../../../public/assets/images";
import Icons from "../../../public/assets/Icons";
import OrderSummary from "../MyCart/OrderSummary";
import ProductSummary from "../Checkout/ProductSummary";

function OrderSuccessPage() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const { orderDetails, fetchOrderDetails, loading } = useOrder();

    useEffect(() => {
        fetchOrderDetails(orderId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container mx-auto">
            <Spin fullscreen spinning={loading} />
            <p className="pb-6 border-b text-xl font-semibold font-poppins text-black-1000">
                Order Confirmation
            </p>

            <div className="flex justify-center items-center flex-col gap-2">
                <Image
                    alt="success image"
                    src={Icons.order_confirmation}
                    className="mb-12"
                />
                <p className="text-black-1000 font-semibold text-2xl mb-4">
                    Thanks for your order!
                </p>
                <p className="text-neutral-300 text-base">
                    Your order has been placed successfully.
                </p>
                <p className="text-neutral-300 text-base">
                    Please be patient while we confirm your order.
                </p>
            </div>

            <p className="pb-6 border-b text-xl font-semibold font-poppins text-black-1000">
                Order Summary
            </p>

            <div className="bg-white rounded-sm py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <ProductSummary items={orderDetails?.items} />

                <OrderSummary
                    totalItems={orderDetails?.items?.length}
                    subtotal={orderDetails?.subtotal}
                    tax={orderDetails?.tax}
                    shipping={orderDetails?.shipping}
                    discount={orderDetails?.discount}
                    total={orderDetails?.total}
                    coupon={orderDetails?.coupon}
                />
            </div>
        </div>
    );
}

export default OrderSuccessPage;
