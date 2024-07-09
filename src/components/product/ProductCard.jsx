"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HeartOutlined } from "@ant-design/icons";
import Icons from "../../../public/assets/Icons";
import { Modal, Skeleton } from "antd";

const ProductCard = ({ product }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="relative rounded flex flex-col gap-3">
            {/* Favorite Icon */}
            <div className="absolute top-2 right-2 z-10">
                <HeartOutlined className="text-gray-500 hover:text-red-500 transition duration-300" />
            </div>

            {/* Product Image */}
            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center group">
                <Image
                    src={product.image}
                    alt={product.name}
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
                <h3
                    title={product.name}
                    className="text-base text-black-1000 font-medium mt-2 line-clamp-1"
                >
                    {product.name}
                </h3>

                {/* Product Price */}
                <p className="text-black-1000 text-base">${product.price}</p>
            </div>

            {/* Modal */}
            <Modal
                title={product.name}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
            >
                <p>Price: ${product.price}</p>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                />
                <p>Some more details about the product...</p>
            </Modal>
        </div>
    );
};

export default ProductCard;
