import React from "react";
import { cookies } from "next/headers";
import { WISHLIST_API_URL } from "@/helpers/apiUrls";
import Image from "next/image";
import WishListsPage from "@/sections/WishListsPage/WishListsPage";
import Layouts from "@/layouts";

async function getWishLists(token) {
    const res = await fetch(WISHLIST_API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.error("Error fetching wishlists", errorData);
        throw new Error(`Failed to fetch wishlists: ${res.statusText}`);
    }

    return res.json();
}

export default async function Page() {
    const cookieStore = cookies();
    const token = cookieStore.get("access_token");

    if (!token) {
        return <div>Please log in to view your wishlists.</div>;
    }

    try {
        const data = await getWishLists(token.value);
        return (
            <Layouts.ProfileLayout>
                <WishListsPage wishLists={data.results} />
            </Layouts.ProfileLayout>
        );
    } catch (error) {
        console.error("Failed to fetch wishlists", error);
        return <div>Failed to load wishlists.</div>;
    }
}
