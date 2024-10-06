import React from "react";
import Layouts from "@/layouts";
import TrackOrders from "@/sections/Order/TrackOrders";

export default async function TrackOrderPage() {
    return (
        <Layouts.ProfileLayout>
            <TrackOrders />
        </Layouts.ProfileLayout>
    );
}
