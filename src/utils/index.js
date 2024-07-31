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
