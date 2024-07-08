"use client";
import Image from "next/image";
import React from "react";
import Icons from "../../../../public/assets/Icons";

function SocialButtons() {
  const loginWithSocialMedia = [
    {
      title: "google",
      icon: Icons.googleIcon,
    },
    {
      title: "facebook",
      icon: Icons.facebookIcon,
    },
  ];
  return (
    <div className="flex flex-row gap-4 justify-between w-full">
      {loginWithSocialMedia.map((ele, id) => {
        return (
          <button
            type="button"
            key={id}
            className="border-2 border-[#EBEDF0] rounded-sms w-full h-[48px] flex items-center justify-center gap-3 bg-[#F5F6F7] cursor-pointer"
            onClick={() => {
              console.log("Click");
            }}
          >
            <Image alt={ele.title} src={ele.icon} width={24} height={24} />
          </button>
        );
      })}
    </div>
  );
}

export default SocialButtons;
