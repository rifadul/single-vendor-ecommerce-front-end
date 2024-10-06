"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { formatDateTime } from "@/utils";
import { TRACK_ORDERS_PATH } from "@/helpers/slug";

function OrderItem({ order }) {
    const router = useRouter();
    const { bg, text } = statusColors[order.order_status] || {
        bg: "bg-gray-100",
        text: "text-gray-800",
    };
    const { date, time } = formatDateTime(order.created_at);

    const handleOrderClick = () => {
        router.push(`${TRACK_ORDERS_PATH}/${order.order_number}`);
    };

    return (
        <div
            className="order-item p-4 border rounded-md mb-4 cursor-pointer hover:bg-gray-100 transition"
            onClick={handleOrderClick}
        >
            <div className="flex justify-between mb-2">
                <span className="text-gray-600">{date}</span>
                <span className="text-gray-600">{time}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="font-semibold">
                    Order Number: {order.order_number}
                </span>
                <span className="text-gray-600">
                    Items: {order.items?.length}
                </span>
            </div>
            <div className="flex justify-between">
                <span
                    className={`inline-block px-3 py-1 rounded-full ${bg} ${text}`}
                >
                    {order.order_status.charAt(0).toUpperCase() +
                        order.order_status.slice(1)}
                </span>
                <span className="font-semibold">Total: ${order.total}</span>
            </div>
        </div>
    );
}

export default OrderItem;

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
