"use client";
import { useState } from "react";
import Image from "next/image";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Icons from "../../../public/assets/Icons";
import { Modal } from "antd";
import ImageCarousel from "./ImageCarousel";
import ProductDetails from "./ProductDetails";
import { useWishlist } from "@/contexts/WishListContext";
import Link from "next/link";
import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";

const ProductCard = ({ product }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { wishLists, addWishlistItem, deleteWishlistItem, loading } =
        useWishlist();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const isProductInWishlist = () => {
        return wishLists.some((item) => item.product.id === product.id);
    };

    const handleWishListToggler = (payload) => {
        if (payload === "add") {
            addWishlistItem(product?.id);
        } else {
            let getWishlist = wishLists.find(
                (item) => item.product.id === product.id
            );
            deleteWishlistItem(getWishlist?.id);
        }
    };

    return (
        <div className="relative rounded flex flex-col gap-3">
            {/* Favorite Icon */}
            <div className="absolute top-2 right-2 z-10">
                {isProductInWishlist() ? (
                    <HeartFilled
                        className="text-red-500 hover:text-red-700 transition duration-300"
                        onClick={() => handleWishListToggler("remove")}
                    />
                ) : (
                    <HeartOutlined
                        className="text-black-1000 hover:text-red-500 transition duration-300"
                        onClick={() => handleWishListToggler("add")}
                    />
                )}
            </div>

            {/* Product Image */}
            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center group">
                <Image
                    src={product?.primary_image}
                    alt={product?.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full"
                />

                {/* Quick view  */}
                <div
                    className="absolute h-12 
                    bg-black-1300 bg-opacity-45  w-full 
                    bottom-0 opacity-0 group-hover:opacity-100 cursor-pointer
                    transition-opacity duration-300 flex items-center justify-center gap-2"
                    onClick={showModal}
                >
                    <Image src={Icons.eye} alt="quick view icon" />
                    <p className="text-white font-medium">Quick View</p>
                </div>
            </div>

            <div className="space-y-2">
                {/* Product Name */}
                <Link href={`${PRODUCT_DETAILS_PATH}/${product?.id}`}>
                    <h3
                        title={product?.name}
                        className="text-base text-black-1000 font-medium mt-2 line-clamp-1"
                    >
                        {product?.name}
                    </h3>
                </Link>

                {/* Product Price */}
                <p className="text-black-1000 text-base">${product?.price}</p>
            </div>

            {/* Modal */}
            <Modal
                title={<span className="p-4"></span>}
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={900}
                centered
            >
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 pl-5 md:pl-8">
                        <ImageCarousel images={product.all_images} />
                    </div>
                    <div className="w-full md:w-1/2 pl-5 md:pl-8">
                        <ProductDetails product={product} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProductCard;
