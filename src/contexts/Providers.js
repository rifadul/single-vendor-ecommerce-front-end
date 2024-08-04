import React from "react";
import { CategoriesProvider } from "./CategoriesContext";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";
import { WishlistProvider } from "./WishListContext";
import { AddressProvider } from "./AddressContext";
import { OrderProvider } from "./OrderContext";

function Providers({ children }) {
    return (
        <CategoriesProvider>
            <AuthProvider>
                <CartProvider>
                    <WishlistProvider>
                        <AddressProvider>
                            <OrderProvider>{children}</OrderProvider>
                        </AddressProvider>
                    </WishlistProvider>
                </CartProvider>
            </AuthProvider>
        </CategoriesProvider>
    );
}

export default Providers;
