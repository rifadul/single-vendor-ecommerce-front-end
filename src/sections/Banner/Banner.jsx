import Buttons from "@/components/Buttons";
import Link from "next/link";
import React from "react";
import BannerCard from "./BannerCard";
import Menu from "./Menu";

function Banner({ data }) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <div className="hidden md:block w-1/5">
          <Menu />
        </div>
        <div className="w-full md:w-4/5">
          <BannerCard />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
      </div>
    </div>
  );
}

export default Banner;
