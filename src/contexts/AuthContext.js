"use client";
import {
    USER_API_URL,
    USER_EMAIL_UPDATE_API_URL,
    USER_PHONE_NUMBER_UPDATE_API_URL,
    USER_PROFILE_API_URL,
    USER_SIGN_IN_API_URL,
} from "@/helpers/apiUrls";
import { createContext, useContext, useState, useEffect } from "react";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OTP_VERIFICATION_PATH } from "@/helpers/slug";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (hasCookie("access_token") && hasCookie("user_info")) {
            setToken(getCookie("access_token"));
            setUser(JSON.parse(getCookie("user_info")));
            setIsLoggedIn(true);
        }
    }, []);

    const login = async (credentials) => {
        setLoading(true);
        try {
            const response = await fetch(USER_SIGN_IN_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (response.ok) {
                setCookie("access_token", data.access);
                setCookie("user_info", JSON.stringify(data.user));
                setIsLoggedIn(true);
                setToken(data.access);
                setUser(data.user);
                toast.success("Login successful!");
                router.push("/"); // Redirect to home page after successful login
            } else {
                // toast.error(data.error || "Failed to login");
                throw new Error(data.error || "Failed to login");
            }
        } catch (error) {
            // console.error("Login error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getProfile = async () => {
        if (!token) return;
        setLoading(true);

        try {
            const response = await fetch(USER_PROFILE_API_URL, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data);
                setCookie("user_info", JSON.stringify(data));
            } else {
                throw new Error(data.message || "Failed to fetch profile");
            }
        } catch (error) {
            console.error("Profile fetch error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateUserData = async (updateValues) => {
        if (!token) return;
        setLoading(true);

        try {
            const response = await fetch(`${USER_API_URL}${user?.id}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updateValues),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Name updated successfully");
                await getProfile();
                // Optionally update user state
                // setUser(data);
                // setCookie("user_info", JSON.stringify(data));
            } else {
                throw new Error(data.error || "Failed to update name");
            }
        } catch (error) {
            console.error("Update name error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    const updatePhoneNumber = async (updateValues) => {
        if (!token) return;
        setLoading(true);

        try {
            const response = await fetch(USER_PHONE_NUMBER_UPDATE_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updateValues),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Phone number updated successfully");
                // Optionally update user state
                // setUser(data);
                // let test = {
                //     headingText:'Verify your phone number',
                //     otp_type:'phone',

                // }

                setCookie("otp_send_to", user?.email);
                setCookie("otp_type", "phone");
                router.push(OTP_VERIFICATION_PATH);
            } else {
                throw new Error(data.error || "Failed to update phone number");
            }
        } catch (error) {
            console.error("Update phone number error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateEmail = async (updateValues) => {
        if (!token) return;
        setLoading(true);
        try {
            const response = await fetch(USER_EMAIL_UPDATE_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updateValues),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Email updated successfully");
                setCookie("otp_send_to", updateValues?.new_email);
                setCookie("otp_type", "email");
                router.push(OTP_VERIFICATION_PATH);
                // Optionally update user state
                // setUser(data);
                // setCookie("user_info", JSON.stringify(data));
            } else {
                throw new Error(data.error || "Failed to update email");
            }
        } catch (error) {
            console.error("Update email error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        deleteCookie("access_token");
        deleteCookie("user_info");
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
        router.push("/"); // Redirect to home page after logout
        toast.success("Logged out successfully");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                isLoggedIn,
                getProfile,
                updateUserData,
                updatePhoneNumber,
                updateEmail,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
