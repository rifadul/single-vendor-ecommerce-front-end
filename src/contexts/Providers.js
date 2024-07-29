import React from "react";
import { CategoriesProvider } from "./CategoriesContext";
import { CartProvider } from "./CartProvider";
import { AuthProvider } from "./AuthContext";

function Providers({ children }) {
    return (
        <CategoriesProvider>
            <AuthProvider>
                <CartProvider>{children}</CartProvider>
            </AuthProvider>
        </CategoriesProvider>
    );
}

export default Providers;
