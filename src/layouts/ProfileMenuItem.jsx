"use client";
import { useAuth } from "@/contexts/AuthContext";
import {
    ACTIVE_ORDERS_PATH,
    MY_ACCOUNT_PATH,
    MY_ADDRESS_PATH,
    ORDER_HISTORY_PATH,
    TRACK_ORDERS_PATH,
    WISHLIST_PATH,
} from "@/helpers/slug";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaCheck,
    FaClipboardList,
    FaClock,
    FaHeart,
    FaHistory,
    FaMapMarkerAlt,
    FaSignOutAlt,
    FaUser,
} from "react-icons/fa";
import Icons from "../../public/assets/Icons";

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
                    href: TRACK_ORDERS_PATH,
                    icon: FaClipboardList,
                },
                {
                    name: "Active Orders",
                    href: ACTIVE_ORDERS_PATH,
                    icon: FaClock,
                },
                {
                    name: "Order History",
                    href: ORDER_HISTORY_PATH,
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
                        {section.items.map((item) => {
                            const isActive = pathname.startsWith(item.href); // Check if the pathname starts with the item.href
                            return (
                                <Link
                                    href={item.href}
                                    key={item.name}
                                    className="flex items-center justify-between px-3 py-3 rounded"
                                >
                                    <div
                                        className={`flex items-center font-poppins ${
                                            isActive
                                                ? "text-blue-900 font-semibold"
                                                : "text-neutral-300 font-medium"
                                        }`}
                                    >
                                        <item.icon
                                            className={`mr-2 ${
                                                isActive
                                                    ? "text-blue-900 font-semibold"
                                                    : "text-neutral-300 font-medium"
                                            }`}
                                        />
                                        {item.name}
                                    </div>
                                    {isActive && (
                                        <FaCheck className="text-white bg-blue-900 rounded-full p-1" />
                                    )}
                                </Link>
                            );
                        })}
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
