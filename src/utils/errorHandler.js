// utils/errorHandler.js
import { debounce } from "lodash";
import { toast } from "react-toastify"; // Ensure you import toast from the right library

// Debounced error toast function
export const showToastError = debounce((message) => {
    toast.error(message);
}, 1000); // Adjust debounce time as needed
