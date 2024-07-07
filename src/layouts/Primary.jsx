"use client";
import Footer from "@/components/Footer";
import LayoutImages from "./LayoutImages";
import NextBreadcrumb from "@/components/Breadcrumb/NextBreadcrumb";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import MetaLayout from "./MetaLayout";

function Primary({ children }) {
  const [isDiscountBar, setIsDiscountBar] = useState(true);
  const currentPath = usePathname();
  return (
    <MetaLayout>
      <div className="relative h-screen">
        <LayoutImages />
        {isDiscountBar && (
          // <TopBar
          //   setIsDiscountBar={setIsDiscountBar}
          //   activeCampaignText={activeCampaignText}
          //   activeCampaignLink={activeCampaignLink}
          // />
          <Navbar.TopBar />
        )}

        <Navbar.Primary />
        {currentPath !== "/" && <Navbar.Secondary />}

        <div className="relative z-20">
          {currentPath !== "/" && (
            <div className="container mx-auto pl-4 pr-6 sm:px-0 flex justify-between items-center py-3 md:py-5">
              <NextBreadcrumb />
            </div>
          )}
          {children}
        </div>

        <Footer.FooterTop />
        <Footer.Primary />
      </div>
    </MetaLayout>
  );
}

export default Primary;