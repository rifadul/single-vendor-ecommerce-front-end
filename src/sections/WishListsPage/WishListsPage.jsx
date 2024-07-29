import React from "react";
import WishlistItem from "./WishlistItem";

const WishlistPage = ({ wishLists }) => (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">
            My Wishlist ({wishLists.length})
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
            {wishLists.map((item) => (
                <WishlistItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default WishlistPage;
