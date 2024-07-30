"use client";
import { useWishlist } from "@/contexts/WishListContext";
import WishlistItem from "./WishlistItem";

import React from "react";

function WishListsPage() {
    const { wishLists } = useWishlist();
    return (
        <>
            {wishLists.map((item, index) => (
                <div key={item.id}>
                    <WishlistItem item={item} />
                    {index < wishLists.length - 1 && (
                        <div className="my-7">
                            <hr />
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default WishListsPage;
