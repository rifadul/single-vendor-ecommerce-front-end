"use client";
import { USER_SIGN_IN_API_URL } from "@/helpers/apiUrls";
import MakeApiCall from "@/services/MakeApiCall";
import { createContext, useContext, useState, useEffect } from "react";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const [token, setToken] = useState(null);

    useEffect(() => {
        // const token = localStorage.getItem("access_token");
        // const userInfo = localStorage.getItem("user_info");
        if (hasCookie("access_token") && hasCookie("user_info")) {
            setToken(getCookie("access_token"));
            setUser(JSON.parse(getCookie("user_info")));
            setIsLoggedIn(true);
            // MakeApiCall({
            //     apiUrl: '/users/me/',
            //     method: 'GET',
            //     headers: { Authorization: `Bearer ${token}` }
            // })
            // .then(response => setUser(response))
            // .catch(() => localStorage.removeItem('token'));
        }
    }, []);

    const login = async (credentials) => {
        const response = await MakeApiCall({
            apiUrl: USER_SIGN_IN_API_URL,
            method: "POST",
            body: credentials,
        });
        setCookie("access_token", response.access);
        setCookie("user_info", JSON.stringify(response.user));
        // localStorage.setItem("access_token", response.access);
        // localStorage.setItem("user_info", JSON.stringify(response.user));
        setIsLoggedIn(true);
        setToken(response.access);
        setUser(response.user);
    };

    const logout = () => {
        deleteCookie("access_token");
        deleteCookie("user_info");
        // localStorage.removeItem("access_token");
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
        router.push("/"); // Redirect to home page after logout
    };

    return (
        <AuthContext.Provider
            value={{ user, token, login, isLoggedIn, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
