"use client";
import { USER_SIGN_IN_API_URL } from "@/helpers/apiUrls";
import MakeApiCall from "@/services/MakeApiCall";
import { createContext, useContext, useState, useEffect } from "react";
// import MakeApiCall from "@/utils/MakeApiCall"; // Adjust the path as needed

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userInfo = localStorage.getItem("user_info");
        if (token && userInfo) {
            setUser(JSON.parse(userInfo));
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
        console.log("response", response);
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("user_info", JSON.stringify(response.user));
        setUser(response.user);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
