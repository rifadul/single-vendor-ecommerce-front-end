"use client";
import { ADD_TO_CART_API_URL } from "@/helpers/apiUrls";
import { getCookie } from "cookies-next";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = async (productVariant, quantity) => {
        const token = getCookie("user_info"); // Retrieve the token from local storage
        // const token = localStorage.getItem("access_token"); // Retrieve the token from local storage
        if (!token) {
            console.error("No token found");
            return;
        }
        try {
            const response = await fetch(ADD_TO_CART_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Pass the token here
                },
                body: JSON.stringify({
                    product_variant: productVariant,
                    quantity,
                }),
            });

            if (response.ok) {
                const updatedCart = await response.json();
                setCartItems(updatedCart.items);
                setCartCount(updatedCart.totalCount);
            } else {
                console.error("Failed to add item to cart");
            }
        } catch (error) {
            console.error("Error adding item to cart", error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
