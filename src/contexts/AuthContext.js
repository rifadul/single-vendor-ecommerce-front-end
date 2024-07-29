"use client";
import { USER_SIGN_IN_API_URL } from "@/helpers/apiUrls";
import MakeApiCall from "@/services/MakeApiCall";
import { createContext, useContext, useState, useEffect } from "react";
// import MakeApiCall from "@/utils/MakeApiCall"; // Adjust the path as needed

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        const userInfo = localStorage.getItem("user_info");
        if (token && userInfo) {
            setUser(JSON.parse(userInfo));
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
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("user_info", JSON.stringify(response.user));
        setIsLoggedIn(true);
        setUser(response.user);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, isLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
