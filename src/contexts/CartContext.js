"use client";
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/contexts/AuthContext";
import {
    ADD_TO_CART_API_URL,
    CART_API_URL,
    MY_CART_API_URL,
} from "@/helpers/apiUrls";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const { isLoggedIn, token } = useAuth();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCart = useCallback(async () => {
        if (!isLoggedIn || !token) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(MY_CART_API_URL, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Failed to fetch cart");
            }

            const data = await response.json();
            console.log("data", data);
            setCart(data);
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }, [isLoggedIn, token]);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const addToCart = async (variantId, quantity) => {
        if (!isLoggedIn || !token) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(ADD_TO_CART_API_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    product_variant: variantId,
                    quantity,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to add to cart");
            }

            toast.success(
                data.message || "Product added to cart successfully."
            );
            fetchCart(); // Refresh the cart data
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateCartItem = async (itemId, quantity) => {
        if (!isLoggedIn || !token) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${ADD_TO_CART_API_URL}${itemId}/`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to update cart item");
            }

            toast.success(data.message || "Cart item updated successfully.");
            fetchCart(); // Refresh the cart data
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const removeCartItem = async (itemId) => {
        if (!isLoggedIn || !token) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${ADD_TO_CART_API_URL}${itemId}/`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to delete cart item");
            }

            toast.success(data.message || "Cart item deleted successfully.");
            fetchCart(); // Refresh the cart data
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        cart,
        loading,
        error,
        fetchCart,
        addToCart,
        updateCartItem,
        removeCartItem,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
