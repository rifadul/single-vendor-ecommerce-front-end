import React from "react";
import { cookies } from "next/headers";
import { WISHLIST_API_URL } from "@/helpers/apiUrls";
import Image from "next/image";
import WishListsPage from "@/sections/WishListsPage/WishListsPage";

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
        console.log("Fetched data:", data); // Log the entire data for debugging
        // return (
        //     <div>
        //         <div>
        //             {data.results &&
        //                 data.results.map((item) => (
        //                     <div key={item.id} className="border-b p-4">
        //                         <h2 className="text-xl font-bold">
        //                             {item.product.name}
        //                         </h2>
        //                         <p className="text-gray-500">
        //                             ${item.product.price}
        //                         </p>
        //                         <Image
        //                             src={item.product.images[0].image}
        //                             alt={item.product.name}
        //                             className="w-16 h-16 object-cover"
        //                             width={10000}
        //                             height={10000}
        //                         />
        //                     </div>
        //                 ))}
        //         </div>
        //     </div>
        // );
        return <WishListsPage wishLists={data.results} />;
    } catch (error) {
        console.error("Failed to fetch wishlists", error);
        return <div>Failed to load wishlists.</div>;
    }
}
