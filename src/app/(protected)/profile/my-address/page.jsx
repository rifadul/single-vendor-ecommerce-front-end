import Layouts from "@/layouts";
import AddressPage from "@/sections/Address/AddressPage";
import React from "react";

function MyAddress() {
    return (
        <Layouts.ProfileLayout>
            <AddressPage />
        </Layouts.ProfileLayout>
    );
}

export default MyAddress;
