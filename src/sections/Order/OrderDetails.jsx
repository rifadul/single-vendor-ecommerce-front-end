"use client";
import { useOrder } from "@/contexts/OrderContext";
import { Divider } from "antd";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import OrderSummary from "../MyCart/OrderSummary";
import { formatDateTime } from "@/utils";
import { CollapsibleOrderItem } from "./CollapsibleOrderItem";
import OrderDetailsLoaderSkeleton from "@/components/common/Loader/Skeleton/OrderDetailsLoaderSkeleton";

function OrderDetails() {
    const { orderNumber } = useParams();
    const { orderDetails, fetchOrderDetails, loading } = useOrder();

    const { bg, text } = statusColors[orderDetails.order_status] || {
        bg: "bg-gray-100",
        text: "text-gray-800",
    };

    useEffect(() => {
        fetchOrderDetails(orderNumber);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (loading) {
        <OrderDetailsLoaderSkeleton />;
    }

    return (
        <div>
            <h3 className="text-neutral-300 font-medium text-base text-center">
                Order Number{" "}
                <span className="text-neutral-700">
                    #{orderDetails.order_number}
                </span>{" "}
            </h3>
            <div className="bg-white rounded-sm py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="flex flex-col gap-5">
                    <p className="text-neutral-300 font-medium text-center">
                        Ordered items
                    </p>
                    <div>
                        {orderDetails?.items?.map((item) => (
                            <CollapsibleOrderItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-neutral-300 font-medium text-center">
                        Order summary
                    </p>
                    <OrderSummary
                        totalItems={orderDetails?.items?.length}
                        subtotal={orderDetails?.subtotal}
                        tax={orderDetails?.tax}
                        shipping={orderDetails?.shipping}
                        discount={orderDetails?.discount}
                        total={orderDetails?.total}
                        coupon={orderDetails?.coupon}
                    />

                    <p className="text-neutral-300 font-medium text-center">
                        Ordered items
                    </p>
                    <div className="border py-6 px-4 flex flex-col gap-4">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <TitleWithValue
                                    title="Order number"
                                    subText={`#${orderDetails.order_number}`}
                                    divider={false}
                                />
                                <div>
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full ${bg} ${text} capitalize`}
                                    >
                                        {orderDetails.order_status}
                                    </span>
                                </div>
                            </div>
                            <Divider className="p-0 m-0" dashed />
                        </div>
                        <TitleWithValue
                            title="Date"
                            subText={`${
                                formatDateTime(orderDetails.created_at).date
                            } at ${
                                formatDateTime(orderDetails.created_at).time
                            }`}
                        />
                        <TitleWithValue
                            title="Delivery type"
                            subText={`${orderDetails.shipping_method?.name}`}
                        />
                        <TitleWithValue
                            title="Delivery address"
                            subText={`
                                ${orderDetails?.billing_address?.address},
                                ${orderDetails?.billing_address?.city},
                                ${orderDetails?.billing_address?.zipcode},
                                ${orderDetails?.billing_address?.state},
                                ${orderDetails?.billing_address?.country}
                            `}
                        />
                        <TitleWithValue
                            title="Billing address"
                            subText={`
                                ${orderDetails?.billing_address?.address},
                                ${orderDetails?.billing_address?.city},
                                ${orderDetails?.billing_address?.zipcode},
                                ${orderDetails?.billing_address?.state},
                                ${orderDetails?.billing_address?.country}
                            `}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;

function TitleWithValue({ title = "", subText = "", divider = true }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="space-y-2">
                <p className="text-neutral-700 font-medium">{title}</p>
                <p className="text-neutral-300 font-normal">{subText}</p>
            </div>
            {divider && <Divider className="p-0 m-0" dashed />}
        </div>
    );
}

const statusColors = {
    processing: {
        bg: "bg-yellow-100", // light yellow background
        text: "text-yellow-800", // dark yellow text
    },
    shipped: {
        bg: "bg-blue-100", // light blue background
        text: "text-blue-800", // dark blue text
    },
    delivered: {
        bg: "bg-green-100", // light green background
        text: "text-green-800", // dark green text
    },
    cancelled: {
        bg: "bg-red-100", // light red background
        text: "text-red-800", // dark red text
    },
};
