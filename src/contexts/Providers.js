import React from "react";
import { CategoriesProvider } from "./CategoriesContext";
import { CartProvider } from "./CartProvider";
import { AuthProvider } from "./AuthContext";
import { WishlistProvider } from "./WishListContext";

function Providers({ children }) {
    return (
        <CategoriesProvider>
            <AuthProvider>
                <WishlistProvider>
                    <CartProvider>{children}</CartProvider>
                </WishlistProvider>
            </AuthProvider>
        </CategoriesProvider>
    );
}

export default Providers;
