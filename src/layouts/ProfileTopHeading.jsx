"use client";
import { formatLastPathSegment } from "@/utils";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa";

function ProfileTopHeading({ isSidebarOpen, setIsSidebarOpen }) {
    const paths = usePathname();
    return (
        <div className="mb-8 lg:mb-12">
            <div className="flex gap-4 items-center px-3 py-3 border-b pb-4 lg:pb-6">
                <button
                    className="lg:hidden"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <FaBars className="text-xl text-gray-700" />
                </button>
                <h2 className="font-semibold text-lg font-poppins text-black-1000">
                    {formatLastPathSegment(paths)}
                </h2>
            </div>
        </div>
    );
}

export default ProfileTopHeading;
