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
    APPLY_COUPON_API_URL,
    CART_API_URL,
    MY_CART_API_URL,
} from "@/helpers/apiUrls";
import { SIGN_IN_PATH } from "@/helpers/slug";
import { useRouter, usePathname } from "next/navigation";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const { isLoggedIn, token } = useAuth();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const pathname = usePathname();

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

    const handleRedirectToLogin = () => {
        toast.warn("You need to be logged in to perform this action.");
        router.push(`${SIGN_IN_PATH}?redirect=${encodeURIComponent(pathname)}`);
    };

    const addToCart = async (variantId, quantity) => {
        if (!isLoggedIn || !token) {
            handleRedirectToLogin();
            return;
        }

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
        if (!isLoggedIn || !token) {
            handleRedirectToLogin();
            return;
        }

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
        if (!isLoggedIn || !token) {
            handleRedirectToLogin();
            return;
        }

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

            if (response.status === 204) {
                // No content response from the server
                toast.success("Cart item deleted successfully.");
                fetchCart(); // Refresh the cart data
            } else {
                // Handle other responses that include a JSON body
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message || "Failed to delete cart item"
                    );
                }

                toast.success(
                    data.message || "Cart item deleted successfully."
                );
                fetchCart(); // Refresh the cart data
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const applyCoupon = async (couponCode) => {
        if (!isLoggedIn || !token) {
            handleRedirectToLogin();
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(APPLY_COUPON_API_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    code: couponCode,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to apply coupon");
            }

            toast.success(data.message || "Coupon applied successfully.");
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
        applyCoupon,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
