import React from "react";
import { CategoriesProvider } from "./CategoriesContext";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";
import { WishlistProvider } from "./WishListContext";
import { AddressProvider } from "./AddressContext";

function Providers({ children }) {
    return (
        <CategoriesProvider>
            <AuthProvider>
                <WishlistProvider>
                    <AddressProvider>
                        <CartProvider>{children}</CartProvider>
                    </AddressProvider>
                </WishlistProvider>
            </AuthProvider>
        </CategoriesProvider>
    );
}

export default Providers;
