import Layouts from "@/layouts";
import MyAccountPage from "@/sections/MyAccount/MyAccountPage";
import React from "react";

function MyProfile() {
    return (
        <Layouts.ProfileLayout>
            <MyAccountPage />
        </Layouts.ProfileLayout>
    );
}

export default MyProfile;
