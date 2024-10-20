"use client";
import CategoryPageLoader from "@/components/common/Loader/CategoryPageLoader";
import ShowcaseCardWithOverlay from "@/components/common/ShowcaseCardWithOverlay";
import { CATEGORY_WITH_PRODUCT_PATH, PRODUCTS_PATH } from "@/helpers/slug";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MakeApiCall from "@/services/MakeApiCall";
import ReactPaginate from "react-paginate";
import { CATEGORY_API_URL } from "@/helpers/apiUrls";

function Categories() {
    const [subCategories, setSubCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const searchParams = useSearchParams();
    const router = useRouter();
    const childrenOfSlug = searchParams.get("children_of");
    const itemsPerPage = 20;

    useEffect(() => {
        if (!childrenOfSlug) {
            router.push("/");
        } else {
            fetchSubCategories(childrenOfSlug, currentPage);
        }
    }, [childrenOfSlug, currentPage, router]);

    const fetchSubCategories = async (slug, page) => {
        setLoading(true);
        try {
            const response = await MakeApiCall({
                apiUrl: `${CATEGORY_API_URL}?children_of=${slug}&page=${page}&page_size=${itemsPerPage}`,
            });
            setSubCategories(response?.results || []);
            setPageCount(Math.ceil((response?.count || 0) / itemsPerPage));
        } catch (error) {
            console.error("Failed to fetch subcategories:", error);
            setSubCategories([]);
            setPageCount(0);
        } finally {
            setLoading(false);
        }
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const handleCategoryClick = (subcategory) => {
        if (subcategory.subcategories?.length > 0) {
            router.push(
                `${CATEGORY_WITH_PRODUCT_PATH}?children_of=${subcategory.slug}`
            );
        } else {
            router.push(`${PRODUCTS_PATH}?category=${subcategory.slug}`);
        }
    };

    if (loading) return <CategoryPageLoader />;

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subCategories.length > 0 ? (
                    subCategories.map((subcategory) => (
                        <div
                            key={subcategory.id}
                            onClick={() => handleCategoryClick(subcategory)}
                            className="cursor-pointer"
                        >
                            <ShowcaseCardWithOverlay
                                title={subcategory.name}
                                backgroundImage={
                                    subcategory.image ||
                                    "https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png"
                                }
                            />
                        </div>
                    ))
                ) : (
                    <p>No subcategories available.</p>
                )}
            </div>
            {subCategories.length > 0 && (
                <div className="flex justify-end mt-8">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                    />
                </div>
            )}
        </div>
    );
}

export default Categories;
