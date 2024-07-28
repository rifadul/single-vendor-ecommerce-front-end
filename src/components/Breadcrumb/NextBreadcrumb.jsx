"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { generateBreadcrumbPath } from "@/utils";

function NextBreadcrumb() {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    // To Uppercase the Breadcrumb item
    const toPascalCase = (string) => (string ? string : "");

    // Breadcrumb item array
    const breadcrumbPath = () => {
        const removeQuestionMark = paths.replace(/\?/g, "/");
        const removeEquals = removeQuestionMark.replace(/\=/g, "/");
        const pathToPascalCase = toPascalCase(removeEquals);

        return pathToPascalCase.split("/").slice(1);
    };

    return paths !== "/" ? (
        <div className="container mx-auto pl-4 pr-6 sm:px-0 flex justify-between items-center py-3 md:py-5">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link
                        href="/"
                        className={`font-poppins ${
                            paths === "/" ? "text-black" : ""
                        }`}
                    >
                        Home
                    </Link>
                </Breadcrumb.Item>
                {breadcrumbPath().map((route, index) => (
                    <Breadcrumb.Item
                        key={index}
                        className={`capitalize ${
                            breadcrumbPath()?.length - 1 === index
                                ? "text-black-800"
                                : ""
                        }`}
                    >
                        <Link
                            href={`${
                                route === "profile"
                                    ? "/profile/my-account"
                                    : breadcrumbPath().includes("profile")
                                    ? `/profile/${route}`
                                    : `${generateBreadcrumbPath(
                                          breadcrumbPath(),
                                          index
                                      )}`
                            }`}
                            className={`font-poppins ${
                                breadcrumbPath()?.length - 1 === index
                                    ? "text-magenta-600"
                                    : ""
                            }`}
                        >
                            {route}
                        </Link>
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </div>
    ) : (
        <></>
    );
}

export default NextBreadcrumb;
