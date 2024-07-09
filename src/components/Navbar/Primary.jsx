import React, { useState } from "react";
import Buttons from "../Buttons";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import { Drawer } from "antd";
import MobileNavbar from "./MobileNavbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    MY_ACCOUNT_PATH,
    MY_WISHLIST_PATH,
    SIGN_IN_PATH,
} from "@/helpers/slug";

function Primary() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav className="bg-magenta-600">
            <div className="container mx-auto py-3 pl-4 pr-6 sm:px-0 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Buttons.IconBtn
                        alt={"menu-list"}
                        icon={Icons.list}
                        width="w-6"
                        height="h-6"
                        className={"lg:hidden block"}
                        onClick={showDrawer}
                    />

                    <Drawer
                        title={
                            <div className="flex w-full justify-between">
                                <p className="text-neutral-800">Categories</p>
                                <Buttons.IconBtn
                                    alt="cross-icon"
                                    icon={Icons.close_neutral}
                                    width="w-6"
                                    height="h-6"
                                    onClick={onClose}
                                />
                            </div>
                        }
                        placement="left"
                        closable={false}
                        onClose={onClose}
                        open={open}
                        width={340}
                    >
                        <MobileNavbar onClose={onClose} />
                    </Drawer>
                    <button
                        className="text-white md:text-4xl text-[28px] font-bold"
                        onClick={() => router.push("/")}
                    >
                        <Image
                            alt="Palooi-logo"
                            height={1000}
                            width={1000}
                            src={"/palooi_icon.svg"}
                            className="w-16 h-16"
                        />
                    </button>
                </div>
                <div className="flex sm:gap-6 gap-3 items-center">
                    <div className="flex sm:gap-4 gap-3">
                        {isLoggedIn && (
                            <Buttons.IconBtn
                                alt={"favorite"}
                                icon={Icons.heart}
                                width="w-6 md:w-8"
                                height="h-6 md:h-8"
                                onClick={() => router.push(MY_WISHLIST_PATH)}
                            />
                        )}
                    </div>
                    {isLoggedIn ? (
                        <Link href={`${MY_ACCOUNT_PATH}`}>
                            <Image
                                alt="profile-icon"
                                height={1000}
                                width={1000}
                                src={Icons.profile_white}
                                className="w-6 h-6 md:w-8 md:h-8"
                            />
                        </Link>
                    ) : (
                        <Link
                            href={SIGN_IN_PATH}
                            className={
                                "text-base font-semibold text-white leading-6"
                            }
                        >
                            SIGN IN
                        </Link>
                    )}
                    <div className="w-[1px] h-4 bg-white" />
                    <Buttons.OutlineCartBtn />
                </div>
            </div>
        </nav>
    );
}

export default Primary;
