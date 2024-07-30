"use client";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";
import { useAuth } from "@/contexts/AuthContext";
import { WISHLIST_API_URL } from "@/helpers/apiUrls";
import { toast } from "react-toastify";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
    const { isLoggedIn, user, token } = useAuth();
    const [wishLists, setWishLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState("");

    const fetchWishlist = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(WISHLIST_API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch wishlist");
            }
            const data = await response.json();
            setWishLists(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        if (isLoggedIn) {
            fetchWishlist();
        }
    }, [isLoggedIn, fetchWishlist]);

    const deleteWishlistItem = async (itemId) => {
        setError(null);
        setSuccess(null);
        try {
            const response = await fetch(`${WISHLIST_API_URL}${itemId}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error("Failed to delete wishlist item");
            }
            setWishLists((prev) => prev.filter((item) => item.id !== itemId));
            toast.success("Wishlist item deleted successfully");
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        }
    };

    const addWishlistItem = async (productId) => {
        setError(null);
        setSuccess(null);
        try {
            const response = await fetch(WISHLIST_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ product_id: productId }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to add wishlist item"
                );
            }
            const data = await response.json();
            setWishLists((prev) => [...prev, data.data]);
            toast.success("Wishlist item added successfully");
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        }
    };

    const value = {
        wishLists,
        loading,
        error,
        success,
        fetchWishlist,
        deleteWishlistItem,
        addWishlistItem,
        wishlistCount: wishLists.length,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
