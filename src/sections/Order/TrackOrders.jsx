"use client";
import { useAuth } from "@/contexts/AuthContext";
import { ORDER_DETAILS_API_URL } from "@/helpers/apiUrls";
import { useState } from "react";
import { toast } from "react-toastify";
import OrderItem from "./OrderOverview/OrderItem";
import TrackOrderSkeletonLoader from "@/components/common/Loader/Skeleton/TrackOrderSkeletonLoader";

function TrackOrders() {
    const [orderNumber, setOrderNumber] = useState("");
    const [orderInfo, setOrderInfo] = useState(null);
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useAuth();
    // Handle find button click
    const handleFindOrder = async () => {
        if (orderNumber.trim() !== "") {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `${ORDER_DETAILS_API_URL}${orderNumber}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                        errorData.message || "Failed to fetch order"
                    );
                }
                const data = await response.json();
                toast.success(data.message);
                setOrderInfo(data.data);
            } catch (err) {
                setError(err.message);
                setOrderInfo(null);
                toast.error(err.message);
            } finally {
                setSearchTriggered(true);
                setLoading(false);
            }
        } else {
            toast.warning("Please enter you order number");
        }
    };
    return (
        <div>
            <h2 className="text-center text-xl font-semibold text-neutral-700 mb-5">
                Track you order with your order number
            </h2>
            <div className="flex items-center mb-6">
                <input
                    type="text"
                    placeholder="Enter your order number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-magenta-500"
                />
                <button
                    onClick={handleFindOrder}
                    className="ml-4 px-6 py-2 bg-magenta-500 text-white font-semibold rounded-md hover:bg-magenta-600 focus:outline-none focus:ring-2 focus:ring-magenta-500"
                >
                    Track Order
                </button>
            </div>

            <div className="mt-4">
                {loading && <TrackOrderSkeletonLoader />}

                {searchTriggered && !loading && (
                    <div>
                        {orderInfo ? (
                            <OrderItem order={orderInfo} />
                        ) : (
                            // Show "Not Found" message if no order details
                            <div className="bg-red-50 text-red-700 px-6 py-8 rounded-md text-center">
                                <p className="font-semibold text-lg">
                                    Order not found. Please try with valid order
                                    number.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrackOrders;
