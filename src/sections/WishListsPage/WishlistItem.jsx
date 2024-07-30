"use client";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import { Spin } from "antd";
import { useWishlist } from "@/contexts/WishListContext";

const WishlistItem = ({ item }) => {
    const { product, id } = item;
    const { deleteWishlistItem, loading } = useWishlist();

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white">
            <Spin fullscreen spinning={loading} />
            <div className="flex items-center gap-4">
                <Image
                    src={product.images[0].image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-sm"
                />
                <div className="space-y-2">
                    <h3 className="text-base font-medium text-black-1000 font-poppins">
                        {product.name}
                    </h3>
                    <p className="text-neutral-300 text-base font-medium">
                        ${product.price}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 sm:mt-0">
                <button className="p-2" onClick={() => deleteWishlistItem(id)}>
                    <Image
                        alt="delete icon"
                        src={Icons.trash}
                        width={24}
                        height={24}
                    />
                </button>
                <button className="p-2">
                    <Image
                        alt="delete icon"
                        src={Icons.add_to_Cart}
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    );
};

export default WishlistItem;
