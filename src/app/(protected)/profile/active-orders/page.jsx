import React from "react";
import Layouts from "@/layouts";
import OrderOverview from "@/sections/Order/OrderOverview/OrderOverview";

export default async function ActiveOrderPage() {
    return (
        <Layouts.ProfileLayout>
            <OrderOverview />
        </Layouts.ProfileLayout>
    );
}
