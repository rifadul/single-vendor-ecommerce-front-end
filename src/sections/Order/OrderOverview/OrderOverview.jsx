/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useOrder } from "@/contexts/OrderContext";
import { ACTIVE_ORDERS_PATH, ORDER_HISTORY_PATH } from "@/helpers/slug";
import OrderList from "./OrderList";
import OrderSkeletonLoader from "./OrderSkeletonLoader";
import TabButton from "./TabButton";

function OrderOverview() {
    const pathname = usePathname();
    const router = useRouter();
    const { orders, fetchOrders, loading, error } = useOrder();

    // Call fetchOrders only once when the component mounts
    useEffect(() => {
        fetchOrders();
    }, []);

    const excludedStatuses = ["delivered", "cancelled"]; // Add more statuses as needed
    const isActiveOrders = pathname === ACTIVE_ORDERS_PATH;
    const activeOrders = orders.filter(
        (order) => !excludedStatuses.includes(order.order_status)
    );

    const handleTabChange = (tab) => {
        const newPath =
            tab === "active" ? ACTIVE_ORDERS_PATH : ORDER_HISTORY_PATH;
        router.push(newPath);
        fetchOrders();
    };

    const displayedOrders = isActiveOrders ? activeOrders : orders;

    return (
        <div className="overflow-hidden scrollbar-hide">
            <div className="tabs flex justify-between">
                <TabButton
                    isActive={isActiveOrders}
                    onClick={() => handleTabChange("active")}
                    label="Active Orders"
                />
                <TabButton
                    isActive={!isActiveOrders}
                    onClick={() => handleTabChange("history")}
                    label="Order History"
                />
            </div>

            {loading ? (
                <OrderSkeletonLoader />
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <OrderList orders={displayedOrders} />
            )}
        </div>
    );
}

export default OrderOverview;
