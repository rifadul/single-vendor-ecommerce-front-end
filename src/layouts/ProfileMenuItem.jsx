"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    MY_ACCOUNT_PATH,
    MY_ADDRESS_PATH,
    WISHLIST_PATH,
} from "@/helpers/slug";
import {
    FaUser,
    FaMapMarkerAlt,
    FaHeart,
    FaClipboardList,
    FaClock,
    FaHistory,
    FaCheck,
    FaSignOutAlt,
} from "react-icons/fa";
import Image from "next/image";
import Icons from "../../public/assets/Icons";
import { useAuth } from "@/contexts/AuthContext";

function ProfileMenuItem() {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    const menuItems = [
        {
            section: "Account",
            items: [
                { name: "My Account", href: MY_ACCOUNT_PATH, icon: FaUser },
                {
                    name: "My Address",
                    href: MY_ADDRESS_PATH,
                    icon: FaMapMarkerAlt,
                },
                {
                    name: "My Wishlist",
                    href: WISHLIST_PATH,
                    icon: FaHeart,
                },
            ],
        },
        {
            section: "Orders",
            items: [
                {
                    name: "Track Orders",
                    href: "/profile/track-orders",
                    icon: FaClipboardList,
                },
                {
                    name: "Active Orders",
                    href: "/profile/active-orders",
                    icon: FaClock,
                },
                {
                    name: "Order History",
                    href: "/profile/order-history",
                    icon: FaHistory,
                },
            ],
        },
    ];

    return (
        <>
            <div className="flex items-center gap-3">
                <Image
                    src={user?.image ? user?.image : Icons.profile_magenta}
                    alt="Profile Image"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    style={{ width: "48px", height: "48px" }}
                />
                <p className="text-base font-medium">{`${user?.first_name} ${user?.last_name}`}</p>
            </div>
            <nav className="mt-8 flex-1 overflow-y-auto">
                {menuItems.map((section) => (
                    <div key={section.section}>
                        <p className="text-neutral-100 font-medium p-2">
                            {section.section}
                        </p>
                        {section.items.map((item) => (
                            <Link
                                href={item.href}
                                key={item.name}
                                className="flex items-center justify-between px-3 py-3 rounded"
                            >
                                <div
                                    className={`flex items-center font-poppins ${
                                        pathname === item.href
                                            ? "text-magenta-600 font-semibold"
                                            : "text-neutral-300 font-medium"
                                    }`}
                                >
                                    <item.icon
                                        className={`mr-2 ${
                                            pathname === item.href
                                                ? "text-magenta-600 font-semibold"
                                                : "text-neutral-300 font-medium"
                                        }`}
                                    />
                                    {item.name}
                                </div>
                                {pathname === item.href && (
                                    <FaCheck className="text-white bg-magenta-600 rounded-full p-1" />
                                )}
                            </Link>
                        ))}
                        <hr className="my-4" />
                    </div>
                ))}
                <div className="mt-auto">
                    <button
                        onClick={logout}
                        className="flex items-center px-3 py-3 text-error-500 cursor-pointer w-full"
                    >
                        <FaSignOutAlt className="mr-2 text-error-500" />
                        Logout
                    </button>
                </div>
            </nav>
        </>
    );
}

export default ProfileMenuItem;
