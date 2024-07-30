"use client";
import React from "react";
import ProfileMenuItem from "./ProfileMenuItem";

function ProfileSidebar({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden ${
                    isSidebarOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsSidebarOpen(false)}
            ></div>
            <div
                className={`bg-white fixed h-screen top-0 lg:relative w-5/6 lg:w-1/4 py-12 px-6 z-20 transform lg:transform-none transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ProfileMenuItem />
            </div>
        </>
    );
}

export default ProfileSidebar;
