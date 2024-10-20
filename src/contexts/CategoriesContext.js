"use client";
import { CATEGORY_API_URL } from "@/helpers/apiUrls";
import MakeApiCall from "@/services/MakeApiCall";
import { createContext, useContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
    const [categoriesData, setCategoriesData] = useState();

    async function getCategories() {
        const response = await MakeApiCall({
            apiUrl: `${CATEGORY_API_URL}?page_size=${1000}`,
        });

        setCategoriesData(response);
    }

    useEffect(() => {
        getCategories();
    }, []);

    const values = {
        categoriesData,
        setCategoriesData,
    };

    return (
        <CategoriesContext.Provider value={values}>
            {children}
        </CategoriesContext.Provider>
    );
}

export const useCategoriesContext = () => useContext(CategoriesContext);
