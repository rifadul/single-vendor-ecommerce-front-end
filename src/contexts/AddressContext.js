"use client";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
} from "react";
import { useAuth } from "@/contexts/AuthContext"; // Assuming you have an AuthContext
import { ADDRESS_API_URL } from "@/helpers/apiUrls";
import { toast } from "react-toastify";

const AddressContext = createContext(null);

export const AddressProvider = ({ children }) => {
    const { isLoggedIn, token } = useAuth();
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const fetchAddresses = useCallback(async () => {
        if (!isLoggedIn) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(ADDRESS_API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to fetch addresses"
                );
            }
            const data = await response.json();
            setAddresses(data?.results);
        } catch (err) {
            toast.error(err.message);
            // setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [isLoggedIn, token]);

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    const deleteAddress = async (addressId) => {
        setError(null);
        try {
            const response = await fetch(`${ADDRESS_API_URL}${addressId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to delete address"
                );
            }
            await fetchAddresses();
        } catch (err) {
            toast.error(err.message);
            // setError(err.message);
        }
    };

    const updateAddress = async (addressId, updatedData) => {
        setError(null);
        try {
            const response = await fetch(`${ADDRESS_API_URL}${addressId}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatedData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to update address"
                );
            }
            await fetchAddresses();
        } catch (err) {
            toast.error(err.message);
            // setError(err.message);
        }
    };

    const createAddress = async (newAddress) => {
        setError(null);
        setLoading(true);
        try {
            const response = await fetch(ADDRESS_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newAddress),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to create address"
                );
            }
            toast.success("Address created successfully");
            setModalVisible(false);
            await fetchAddresses();
        } catch (err) {
            toast.error(err.message);
            // setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        addresses,
        loading,
        error,
        fetchAddresses,
        deleteAddress,
        updateAddress,
        createAddress,
        setModalVisible,
        modalVisible,
    };

    return (
        <AddressContext.Provider value={value}>
            {children}
        </AddressContext.Provider>
    );
};

export const useAddress = () => useContext(AddressContext);
