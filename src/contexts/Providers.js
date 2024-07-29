import React from "react";
import { CategoriesProvider } from "./CategoriesContext";
import { CartProvider } from "./CartProvider";

function Providers({ children }) {
    return (
        <CategoriesProvider>
            <CartProvider>{children}</CartProvider>
        </CategoriesProvider>
    );
}

export default Providers;
