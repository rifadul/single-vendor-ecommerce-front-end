"use client";
import { socialLinks } from "@/libs/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Buttons from "../Buttons";
import { footerLinks } from "@/libs/footerLinks";
// import { PRODUCTS_PATH, SIGN_UP_PATH } from "@/helpers/slug";
// import CategoryService from "@/services/categoryService";

const Primary = () => {
    // const [subscribeEmail, setSubscribeEmail] = useState("");
    const [apiLinks, setApiLinks] = useState([]);
    const [combinedLinks, setCombinedLinks] = useState([]);

    // const getCategory = async () => {
    //     try {
    //         const res = await CategoryService.getCategoryTree();

    //         if (res?.status === 200) {
    //             const names = res?.body?.docs.map((doc, index) => ({
    //                 id: index + 1,
    //                 title: doc.name,
    //                 path: `/category/products?categorySlug=${doc.slug}`,
    //             }));
    //             setApiLinks(names);
    //         }
    //     } catch (e) {
    //         console.error("Error fetching API links:", error);
    //     }
    // };

    // useEffect(() => {
    //     getCategory();
    // }, []);

    useEffect(() => {
        if (apiLinks?.length > 0) {
            const updatedLinks = [
                footerLinks[0],
                footerLinks[1],
                { id: 3, title: "Categories", links: apiLinks },
                footerLinks[2],
            ];
            setCombinedLinks(updatedLinks);
        } else {
            setCombinedLinks(footerLinks);
        }
    }, [apiLinks]);

    return (
        <div className="bg-magenta-600">
            <div className="container mx-auto px-6">
                <div className="lg:pt-20 md:pt-14 sm:pt-11 pt-9 pb-4 grid grid-cols-12 lg:flex-row items-start justify-between lg:gap-x-12 gap-y-9">
                    <div className="flex flex-col gap-5  col-span-12  md:col-span-4">
                        {/* <h1 className="text-[40px] font-bold text-white m-0 sm:text-left text-center">
                            Palooi
                        </h1> */}
                        <Image
                            alt="Palooi-logo"
                            height={1000}
                            width={1000}
                            src={"/palooi_icon.svg"}
                            className="w-40 h-40 self-center sm:self-start"
                        />
                        <p className="text-sm text-white font-medium mt-5 sm:block hidden">
                            Follow us on social media
                        </p>
                        <div className="hidden sm:flex gap-6 mt-3">
                            {socialLinks.map((item) => (
                                <Link href={item.links} key={item.id}>
                                    <Image src={item.icon} alt="social-icons" />
                                </Link>
                            ))}
                        </div>
                        {/* <div className="mt-8">
                            <p className="text-sm text-white font-medium">
                                Subscribe to our newsletter
                            </p>
                            <div className="flex items-center mt-3">
                                <input
                                    type="email"
                                    value={subscribeEmail}
                                    className="bg-light-gray py-3 px-5 rounded-l input-field border-none outline-none text-sm lg:text-base text-white w-full lg:w-[257px]"
                                    placeholder="username@email.com"
                                    onChange={(event) =>
                                        setSubscribeEmail(event.target.value)
                                    }
                                />
                                <div>
                                    <button
                                        className="py-3.5 px-5 bg-white
                                            text-magenta-600 text-sm font-medium
                                            rounded-r whitespace-nowrap"
                                        disabled={subscribeEmail === ""}
                                        onClick={() =>
                                            console.log(
                                                "Subscribe email is ",
                                                subscribeEmail
                                            )
                                        }
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-10 col-span-12 md:col-span-8">
                        {combinedLinks.map((item) => (
                            <div key={item.id} className="col-span-1">
                                <h5 className="text-white font-medium text-base">
                                    {item.title}
                                </h5>
                                <div className="flex flex-col gap-3 mt-3">
                                    {item.links.map((subLink) => (
                                        <Link
                                            key={subLink.id}
                                            href={subLink.path}
                                            className="text-sm text-white"
                                            target="_blank"
                                        >
                                            {subLink.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[1px] w-full bg-magenta-400" />
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex sm:hidden gap-6 mt-3 ">
                        {socialLinks.map((item) => (
                            <Link
                                href={item.links}
                                key={item.id}
                                target="_blank"
                            >
                                <Image src={item.icon} alt="social-icons" />
                            </Link>
                        ))}
                    </div>
                    <p className="text-center py-5 text-sm text-white">
                        Copyright {new Date().getFullYear()} by Palooi.
                    </p>
                    <p className="text-sm text-white pb-4 md:pb-0">
                        Developed by{" "}
                        <Link target="_blank" href="https://zaagsys.com/">
                            ZAAG Systems Ltd.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Primary;
