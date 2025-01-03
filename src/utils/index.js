export function generateBreadcrumbPath(routes, index) {
    if (routes[index] === "product-details") return "/" + routes.join("/");
    return "/" + routes.slice(0, index + 1).join("/");
}

export const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

export const convertHyphenatedToCapitalized = (text) => {
    return text
        .split("-") // Split the text by hyphens
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first character of each word
        .join(" "); // Join the words with a space
};

export const formatLastPathSegment = (path) => {
    const segments = path.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return lastSegment
        .split("-") // Split by hyphens
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first char
        .join(" "); // Join words with space
};

export function maskString(input) {
    if (input.includes("@")) {
        // Mask email
        const [user, domain] = input.split("@");
        return user.slice(0, 3) + "***" + user.slice(-2) + "@" + domain;
    } else {
        // Mask phone number
        return input.slice(0, 7) + "******" + input.slice(-1);
    }
}

export function formatDateTime(createdAt) {
    const date = new Date(createdAt);

    // Define options for time formatting
    const optionsTime = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    // Get the components of the date
    const day = date.getDate().toString().padStart(2, "0"); // Ensure two-digit day
    const month = date.toLocaleString("default", { month: "short" }); // Get short month name
    const year = date.getFullYear(); // Get the full year

    // Format the date as "10 Jun, 2024"
    const formattedDate = `${day} ${month}, ${year}`;

    // Format the time
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime);

    return {
        date: formattedDate,
        time: formattedTime,
    };
}

export function formatString(input) {
    // Remove any non-alphanumeric characters (except space) and replace with a space
    const cleanedString = input.replace(/[_-]/g, ' ');

    // Capitalize the first character and lowercase the rest of each word
    const formattedString = cleanedString
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return formattedString;
}
