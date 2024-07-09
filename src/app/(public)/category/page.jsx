import CategoryPageLoader from "@/components/common/Loader/CategoryPageLoader";
import ShowcaseCardWithOverlay from "@/components/common/ShowcaseCardWithOverlay";
import { PRODUCTS_PATH } from "@/helpers/slug";
import Link from "next/link";
import React, { Suspense } from "react";

function Categories() {
    return (
        <Suspense fallback={<CategoryPageLoader />}>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Link href={PRODUCTS_PATH} key={index}>
                            <ShowcaseCardWithOverlay
                                title="Eid Exclusive Collection"
                                backgroundImage="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </Suspense>
    );
}

export default Categories;
