import React from "react";
import WishlistItem from "./WishlistItem";

const WishlistPage = ({ wishLists }) => (
    <>
        {wishLists.map((item) => (
            <WishlistItem key={item.id} item={item} />
        ))}
    </>
);

export default WishlistPage;
