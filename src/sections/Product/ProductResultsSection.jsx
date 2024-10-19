"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PRODUCTS_API_URL } from "@/helpers/apiUrls";
import Buttons from "@/components/Buttons";
import ProductListing from "@/components/product/ProductListing";
import ProductPageSkeleton from "@/components/common/Loader/ProductPageSkeleton";
import Icons from "../../../public/assets/Icons";
import ReactPaginate from "react-paginate";

// Function to fetch products from the API
async function fetchProducts(params = "") {
    const res = await fetch(`${PRODUCTS_API_URL}${params ? `?${params}` : ""}`);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

function ProductResultsSection({ showDrawer }) {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const searchParams = useSearchParams();
    const router = useRouter();
    const itemsPerPage = 24; // Adjust items per page as needed

    // Fetch products whenever search parameters or current page changes
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                // Convert searchParams to string and add pagination parameters
                const params = new URLSearchParams(searchParams.toString());
                params.set("page", currentPage);
                params.set("page_size", itemsPerPage);

                const productsData = await fetchProducts(params.toString());
                setProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, [searchParams, currentPage]);

    // Handle pagination page click
    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1; // ReactPaginate uses zero-based index
        setCurrentPage(selectedPage);

        // Update the URL with the new page parameter
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", selectedPage);
        router.replace(`?${params.toString()}`, undefined, { shallow: true });
    };

    if (loading) {
        return <ProductPageSkeleton />;
    }

    return (
        <div className="flex-1 overflow-y-auto scrollbar-hide px-4">
            <div className="flex items-center justify-between mb-6">
                {/* responsive filter button for small screens */}
                <Buttons.IconWithLabelBtn
                    alt="cross-icon"
                    icon={Icons.filter}
                    width="w-6"
                    height="h-6"
                    onClick={showDrawer}
                    label="Filter"
                    className="lg:hidden"
                />
                <h1>{products?.count} Results</h1>
            </div>

            {products?.results?.length > 0 ? (
                <>
                    <ProductListing products={products?.results} />
                    <div className="flex justify-center mt-8">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={Math.ceil(
                                products?.count / itemsPerPage
                            )}
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
                </>
            ) : (
                <p className="text-center text-gray-500">No products found</p>
            )}
        </div>
    );
}

export default ProductResultsSection;
