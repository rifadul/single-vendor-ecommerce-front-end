"use client";
import { useEffect } from "react";

 // Error components must be Client Components


export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>Error page</div>
    );
}
