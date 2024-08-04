"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Input, Spin, message, Typography } from "antd";
import { useCart } from "@/contexts/CartContext";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const MyCartPage = () => {
    const { cart, loading, updateCartItem, removeCartItem } = useCart();
    const [coupon, setCoupon] = useState("");

    const handleQuantityChange = (itemId, quantity, maxQuantity, type) => {
        if (type === "increment" && quantity < maxQuantity) {
            updateCartItem(itemId, quantity + 1);
        } else if (type === "decrement" && quantity > 1) {
            updateCartItem(itemId, quantity - 1);
        }
    };

    const handleRemoveItem = (itemId) => {
        removeCartItem(itemId);
    };

    const handleApplyCoupon = () => {
        message.success("Coupon applied successfully");
    };

    const renderCartItems = () => {
        return cart.items.map((item) => (
            <div
                key={item.id}
                className="flex items-center justify-between p-4 border-b"
            >
                <div className="flex items-center gap-4 w-1/3">
                    <img
                        src={item.product_variant.image}
                        alt={item.product_variant.product.name}
                        width={80}
                        height={80}
                        className="object-cover rounded-sm"
                    />
                    <div>
                        <Title level={5} className="m-0">
                            {item.product_variant.product.name}
                        </Title>
                        <Text>
                            Product Code: {item.product_variant.product.sku}
                        </Text>
                    </div>
                </div>
                <div className="flex items-center justify-between w-2/3">
                    <Text className="text-lg font-semibold w-1/4">
                        ${item.product_variant.product.price}
                    </Text>
                    <div className="flex items-center gap-2 w-1/4">
                        <Button
                            icon={<MinusOutlined />}
                            onClick={() =>
                                handleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    item.product_variant.max_quantity,
                                    "decrement"
                                )
                            }
                            disabled={item.quantity <= 1}
                        />
                        <Text>{item.quantity}</Text>
                        <Button
                            icon={<PlusOutlined />}
                            onClick={() =>
                                handleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    item.product_variant.max_quantity,
                                    "increment"
                                )
                            }
                            disabled={
                                item.quantity >=
                                item.product_variant.max_quantity
                            }
                        />
                    </div>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => handleRemoveItem(item.id)}
                    />
                    <Text className="ml-4 text-lg font-semibold w-1/4">
                        ${item.total_price}
                    </Text>
                </div>
            </div>
        ));
    };

    // const calculateSummary = () => {
    //     const subtotal = cart.items.reduce(
    //         (acc, item) => acc + parseFloat(item.total_price),
    //         0
    //     );
    //     const tax = 60; // Example value
    //     const shipping = 100; // Example value
    //     const discount = 100; // Example value
    //     const total = subtotal + tax + shipping - discount;

    //     return { subtotal, tax, shipping, discount, total };
    // };

    // const summary = calculateSummary();

    // return (
    //     <div className="container mx-auto p-4 bg-pink-50">
    //         <Spin spinning={loading}>
    //             {cart && cart.items.length > 0 ? (
    //                 <div className="flex flex-col lg:flex-row gap-6">
    //                     <div className="flex-1">
    //                         <Title level={3} className="mb-4">
    //                             My cart ({cart.items.length} Items)
    //                         </Title>
    //                         <div className="bg-white p-4 rounded">
    //                             <div className="flex items-center justify-between p-4 border-b bg-gray-100 font-semibold">
    //                                 <div className="w-1/3">Product</div>
    //                                 <div className="flex items-center justify-between w-2/3">
    //                                     <div className="w-1/4">Price</div>
    //                                     <div className="w-1/4">Quantity</div>
    //                                     <div className="w-1/4">Total Price</div>
    //                                 </div>
    //                             </div>
    //                             {renderCartItems()}
    //                             <Link href="/products">
    //                                 <Button type="primary" className="mt-4">
    //                                     CONTINUE SHOPPING
    //                                 </Button>
    //                             </Link>
    //                         </div>
    //                     </div>
    //                     <div className="w-full lg:w-1/3 p-4 bg-white rounded">
    //                         <Title level={4}>ORDER SUMMARY</Title>
    //                         <div className="flex justify-between mb-2">
    //                             <Text>Total items:</Text>
    //                             <Text>{cart.items.length}</Text>
    //                         </div>
    //                         <div className="flex justify-between mb-2">
    //                             <Text>Sub total:</Text>
    //                             <Text>${summary.subtotal.toFixed(2)}</Text>
    //                         </div>
    //                         <div className="flex justify-between mb-2">
    //                             <Text>TAX:</Text>
    //                             <Text>${summary.tax.toFixed(2)}</Text>
    //                         </div>
    //                         <div className="flex justify-between mb-2">
    //                             <Text>Shipping Charge:</Text>
    //                             <Text>${summary.shipping.toFixed(2)}</Text>
    //                         </div>
    //                         <div className="flex justify-between mb-2">
    //                             <Text>Discount:</Text>
    //                             <Text className="text-red-500">
    //                                 - ${summary.discount.toFixed(2)}
    //                             </Text>
    //                         </div>
    //                         <div className="flex justify-between mb-2 font-semibold">
    //                             <Text>Total:</Text>
    //                             <Text className="text-lg">
    //                                 ${summary.total.toFixed(2)}
    //                             </Text>
    //                         </div>
    //                         <Input
    //                             placeholder="Coupon code (Optional)"
    //                             value={coupon}
    //                             onChange={(e) => setCoupon(e.target.value)}
    //                             className="mb-2"
    //                         />
    //                         <Button
    //                             type="primary"
    //                             block
    //                             onClick={handleApplyCoupon}
    //                             className="mb-4"
    //                         >
    //                             Apply
    //                         </Button>
    //                         <Button
    //                             type="primary"
    //                             block
    //                             className="bg-pink-500 text-white"
    //                         >
    //                             CHECKOUT
    //                         </Button>
    //                         <div className="text-sm text-neutral-600 mt-4">
    //                             Express delivery within 24 to 48 hours available
    //                             for Dhaka City. Select option on next screen.
    //                         </div>
    //                     </div>
    //                 </div>
    //             ) : (
    //                 <div className="text-center">
    //                     <Title level={3}>Your Cart is Empty</Title>
    //                     <Link href="/products">
    //                         <Button type="primary">Continue Shopping</Button>
    //                     </Link>
    //                 </div>
    //             )}
    //         </Spin>
    //     </div>
    // );
};

export default MyCartPage;
