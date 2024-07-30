import React from "react";
import WishListsPage from "@/sections/WishListsPage/WishListsPage";
import Layouts from "@/layouts";

export default async function Page() {
    return (
        <Layouts.ProfileLayout>
            <WishListsPage />
        </Layouts.ProfileLayout>
    );
}
