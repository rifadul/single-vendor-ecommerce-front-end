"use client";
import { useState } from "react";
import ProfileTopHeading from "./ProfileTopHeading";
import ProfileSidebar from "./ProfileSidebar";

const ProfileLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="container mx-auto ">
            <ProfileTopHeading
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div className="flex flex-col lg:flex-row h-screen gap-6 overflow-hidden">
                <ProfileSidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                {/* render main page */}
                <div className="flex-1 p-8 lg:py-12 lg:px-14 bg-white lg:ml-0 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
