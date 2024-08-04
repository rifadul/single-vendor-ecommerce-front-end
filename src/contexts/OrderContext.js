"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import {
    ORDER_API_URL,
    SHIPPING_ADDRESS_API_URL,
    SHIPPING_METHOD_API_URL,
} from "@/helpers/apiUrls";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";
import { ORDER_SUCCESS_PATH } from "@/helpers/slug";

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
    const { token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [shippingMethods, setShippingMethods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { fetchCart } = useCart();
    const router = useRouter();

    const fetchOrders = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(ORDER_API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch orders");
            }
            const data = await response.json();
            setOrders(data.results);
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchShippingMethods = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(SHIPPING_METHOD_API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch shipping addresses");
            }
            const data = await response.json();
            setShippingMethods(data.results);
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const placeOrder = async (orderBody) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(ORDER_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(orderBody),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to place order");
            }
            const data = await response.json();

            console.log("data", data);
            toast.success(data?.message || "Order placed successfully");
            setOrders((prev) => [...prev, data]);
            fetchCart();

            const params = {
                orderId: data?.data?.id,
            };
            const queryString = new URLSearchParams(params).toString();

            router.push(`${ORDER_SUCCESS_PATH}?${queryString}`);
            router.push(
                data?.payment_url
                    ? data?.payment_url
                    : `${ORDER_SUCCESS_PATH}?${queryString}`
            );
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <OrderContext.Provider
            value={{
                orders,
                shippingMethods,
                loading,
                error,
                fetchOrders,
                fetchShippingMethods,
                placeOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);
