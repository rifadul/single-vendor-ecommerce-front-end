import Link from "next/link";
import React from "react";

function BannerCard() {
    return (
        <div
            className="relative h-[500px] w-full bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="text-white mb-4 max-w-xl font-medium text-5xl">
                    Eid Exclusive Collection
                </div>
                <Link
                    href="#"
                    className="bg-magenta-600 py-3 px-9 text-white font-semibold text-base rounded-sm hover:bg-magenta-700 transition duration-300"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
}

export default BannerCard;
