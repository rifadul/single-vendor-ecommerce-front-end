import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import { megaMenuData } from "@/libs/megaMenuData";

function Secondary() {
    const pathname = usePathname();
    const [modal, setModal] = useState(false);
    const [categoryData, setCategoryData] = useState([]);

    const handleCategoryData = async () => {
        setCategoryData(megaMenuData);
    };

    useEffect(() => {
        handleCategoryData(); // Fetch category data
    }, []);

    return (
        <div className="hidden md:flex gap-x-16 justify-center bg-white relative">
            {navLinks.map((item, index) => (
                <React.Fragment key={index}>
                    {item.title === "CLOTHING" ||
                    item.title === "JEWELLERY" ||
                    item.title === "DRY FOODS" ? (
                        <div
                            className=" group  py-4"
                            onMouseEnter={() => setModal(true)}
                            onMouseLeave={() => setModal(false)}
                        >
                            <button className="text-base text-neutral-600">
                                {item.title}
                            </button>

                            <div className="group-hover:block hidden absolute top-14 z-30 left-1/2 transform -translate-x-1/2 bg-white animate-fadeIn shadow-lg">
                                <MegaMenu categoryData={categoryData} />
                            </div>
                        </div>
                    ) : (
                        <Link
                            href={item.path}
                            className={`text-base relative py-4 ${
                                pathname === item.path
                                    ? "text-magenta-600"
                                    : "text-neutral-600"
                            }`}
                        >
                            {item.title}
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Secondary;

export const navLinks = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 1,
        title: "CLOTHING",
        path: "/clothing",
    },
    {
        id: 1,
        title: "JEWELLERY",
        path: "/jewellery",
    },
    {
        id: 1,
        title: "DRY FOODS",
        path: "/dry-foods",
    },
];
