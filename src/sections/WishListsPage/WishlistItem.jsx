"use client";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import { Spin } from "antd";
import { useWishlist } from "@/contexts/WishListContext";

const WishlistItem = ({ item }) => {
    const { product, id } = item;
    const { deleteWishlistItem, loading } = useWishlist();

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <Spin fullscreen spinning={loading} />
            <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0">
                    <Image
                        src={product.images[0].image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="object-cover rounded-sm h-full"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-base font-medium text-black-1000 font-poppins break-words">
                        {product.name}
                    </h3>
                    <p className="text-neutral-300 text-base font-medium">
                        ${product.price}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 ml-4">
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
                        alt="add to cart icon"
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
