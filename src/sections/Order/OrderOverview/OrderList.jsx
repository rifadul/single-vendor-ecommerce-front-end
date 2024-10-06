import React from "react";
import OrderItem from "./OrderItem";

function OrderList({ orders }) {
    return (
        <div className="order-list mt-6">
            {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
            ))}
        </div>
    );
}

export default OrderList;
