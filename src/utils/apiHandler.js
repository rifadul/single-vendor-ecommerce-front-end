import { SIGN_IN_PATH } from "@/helpers/slug";
import { toast } from "react-toastify";

// utils/apiHandler.js
let isLoggingOut = false; // To prevent multiple logout calls

export const handleApiResponse = async (response, logout) => {
    if (response.status === 401 && !isLoggingOut) {
        isLoggingOut = true; // Prevent duplicate logout calls
        logout(); // Log out the user
        throw new Error(
            data.message || "Session expired. Please log in again."
        );
    }

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong");
    }

    return response.json(); // Return parsed response
};

export const handleRedirectToLogin = (router, pathname) => {
    toast.warn("You need to be logged in to perform this action.");
    router.push(`${SIGN_IN_PATH}?redirect=${encodeURIComponent(pathname)}`);
};
