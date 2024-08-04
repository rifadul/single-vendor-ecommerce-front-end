"use client";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import { Spin } from "antd";
import { useWishlist } from "@/contexts/WishListContext";
import { useCart } from "@/contexts/CartContext";

const WishlistItem = ({ item }) => {
    const { product, id } = item;
    const { deleteWishlistItem, loading: wishlistLoading } = useWishlist();
    const { addToCart, loading: cartLoading } = useCart();

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <Spin fullscreen spinning={wishlistLoading || cartLoading} />
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
                <button
                    title="Delete"
                    className="p-2"
                    onClick={() => deleteWishlistItem(id)}
                >
                    <Image
                        alt="delete icon"
                        src={Icons.trash}
                        width={24}
                        height={24}
                    />
                </button>
                <button
                    className="p-2"
                    title="Add to cart"
                    onClick={() =>
                        addToCart(product?.variants[0]?.sizes[0]?.variant_id, 1)
                    }
                >
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
