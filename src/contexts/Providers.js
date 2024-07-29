import React from "react";
import { CategoriesProvider } from "./CategoriesContext";

function Providers({ children }) {
    return <CategoriesProvider>{children}</CategoriesProvider>;
}

export default Providers;
