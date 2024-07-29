"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import TopBar from "./TopBar";
import Primary from "./Primary";
import Secondary from "./Secondary";

function TopNavSection() {
    const [isDiscountBar, setIsDiscountBar] = useState(true);
    const currentPath = usePathname();
    return (
        <>
            {isDiscountBar && (
                // <TopBar
                //   setIsDiscountBar={setIsDiscountBar}
                //   activeCampaignText={activeCampaignText}
                //   activeCampaignLink={activeCampaignLink}
                // />
                <TopBar />
            )}

            <Primary />
            {currentPath !== "/" && <Secondary />}
        </>
    );
}

export default TopNavSection;
