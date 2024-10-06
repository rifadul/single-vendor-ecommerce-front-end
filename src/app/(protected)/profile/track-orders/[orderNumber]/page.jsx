import React from "react";
import Layouts from "@/layouts";
import OrderDetails from "@/sections/Order/OrderDetails";

export default async function TrackOrderDetailsPage() {
    return (
        <Layouts.ProfileLayout>
            <OrderDetails />
        </Layouts.ProfileLayout>
    );
}
