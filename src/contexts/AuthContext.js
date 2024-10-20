"use client";
import {
    CHANGE_PASSWORD_API_URL,
    FORGET_PASSWORD_API_URL,
    RESET_PASSWORD_API_URL,
    USER_API_URL,
    USER_EMAIL_UPDATE_API_URL,
    USER_PHONE_NUMBER_UPDATE_API_URL,
    USER_PROFILE_API_URL,
    USER_SIGN_IN_API_URL,
    USER_UPDATE_IMAGE_API_URL,
} from "@/helpers/apiUrls";
import { createContext, useContext, useState, useEffect } from "react";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    OTP_VERIFICATION_PATH,
    RESET_PASSWORD_PATH,
    SIGN_IN_PATH,
} from "@/helpers/slug";

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

    const login = async (credentials, redirectPath = "/") => {
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
                router.push(redirectPath);
            } else {
                throw new Error(data.error || "Failed to login");
            }
        } catch (error) {
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
                cache: "no-store",
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
                await getProfile();

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

    const changePassword = async (updateValues) => {
        if (!token) return;
        setLoading(true);
        try {
            const response = await fetch(CHANGE_PASSWORD_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updateValues),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Password updated successfully");
            } else {
                throw new Error(data.error || "Failed to update email");
            }
        } catch (error) {
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

    const forgetPassword = async (email) => {
        setLoading(true);
        try {
            const response = await fetch(FORGET_PASSWORD_API_URL, {
                method: "POST",
                body: JSON.stringify(email),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (response.ok) {
                toast.success(data?.status);
                router.push(RESET_PASSWORD_PATH);
            } else {
                throw new Error(data.error || "Failed to verify email");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async (values) => {
        setLoading(true);
        try {
            const response = await fetch(RESET_PASSWORD_API_URL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (response.ok) {
                toast.success(data?.status);
                router.push(SIGN_IN_PATH);
            } else {
                throw new Error(data.error || "Failed to verify email");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateProfileImage = async (imageFile) => {
        if (!token) return;

        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const response = await fetch(USER_UPDATE_IMAGE_API_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data?.user);
                setCookie("user_info", JSON.stringify(data?.user));
                toast.success(
                    data?.status || "Profile image updated successfully"
                );
            } else {
                toast.error(data.error || "Failed to update profile image");
                throw new Error(data.error || "Failed to update profile image");
            }
        } catch (error) {
            console.error("Update profile image error:", error);
            toast.error(error.message);
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
                changePassword,
                forgetPassword,
                resetPassword,
                updateProfileImage,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
