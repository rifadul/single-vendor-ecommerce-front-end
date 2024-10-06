/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for dropdown
import { Modal, Button, Input, Form, Rate } from "antd"; // Use antd for modal and form components
import { toast } from "react-toastify"; // Notification
import { PRODUCT_REVIEW_API_URL } from "@/helpers/apiUrls";
import { useAuth } from "@/contexts/AuthContext";

export function CollapsibleOrderItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useAuth();
    const [form] = Form.useForm(); // Ant Design form instance

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // Handle Review Button Click
    const showReviewModal = () => {
        setIsModalOpen(true);
    };

    // Reset form and close modal when clicking cancel
    const handleCancel = () => {
        form.resetFields(); // Reset form fields when modal is closed
        setIsModalOpen(false);
    };

    // Handle Review Form Submission
    const handleReviewSubmit = async (values) => {
        try {
            const response = await fetch(PRODUCT_REVIEW_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    product_id: item.product.id,
                    rating: values.rating,
                    comment: values.comment,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to submit the review"
                );
            }

            toast.success("Review submitted successfully!");
            form.resetFields(); // Clear form fields after submission
            setIsModalOpen(false); // Close modal after submission
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="border rounded-md p-4 mb-4 transition-all duration-500 ease-in-out">
            {/* Collapsed Header */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleCollapse}
            >
                {/* Left: Product Name */}
                <div className="text-lg text-neutral-700 font-medium truncate w-1/2">
                    {item.product.name}
                </div>

                {/* Right: Quantity and Total Price */}
                <div className="flex justify-end gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-sm text-neutral-300 font-semibold">
                            {item.quantity} items
                        </span>
                        <span className="text-base text-neutral-700 font-semibold">
                            ${item.total_price}
                        </span>
                    </div>

                    {/* Dropdown Icon */}
                    <div>
                        {isOpen ? (
                            <FaChevronUp className="text-neutral-700" />
                        ) : (
                            <FaChevronDown className="text-neutral-700" />
                        )}
                    </div>
                </div>
            </div>

            {/* Smooth Transition for Expanded Content */}
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
                {isOpen && (
                    <div className="mt-4">
                        {/* Product Image */}
                        <Image
                            src={item.product_variant.image}
                            alt={item.product.name}
                            width={128}
                            height={128}
                            className="mb-4 object-cover"
                        />

                        {/* Product Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-neutral-300 truncate">
                                    <strong className="text-neutral-700">
                                        SKU:
                                    </strong>{" "}
                                    {item.product.sku}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Category:
                                    </strong>{" "}
                                    {item.product.category.name}
                                </p>
                                <p className="text-neutral-300 line-clamp-2">
                                    <strong className="text-neutral-700">
                                        Description:
                                    </strong>{" "}
                                    {item.product.short_description}
                                </p>
                            </div>

                            <div>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Color:
                                    </strong>{" "}
                                    {item.product_variant.color}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Size:
                                    </strong>{" "}
                                    {item.product_variant.size.size}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Price at order:
                                    </strong>{" "}
                                    ${item.price_at_order_time}
                                </p>
                                <p className="text-neutral-300">
                                    <strong className="text-neutral-700">
                                        Discounted Price:
                                    </strong>{" "}
                                    ${item.discount_price_at_order_time}
                                </p>
                            </div>
                        </div>

                        {/* Review Button */}
                        <Button
                            className="mt-4 bg-magenta-500 text-white hover:bg-magenta-600"
                            onClick={showReviewModal}
                        >
                            Review this product
                        </Button>
                    </div>
                )}
            </div>

            {/* Review Modal */}
            <Modal
                title={`Review ${item.product.name}`}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    form={form} // Attach form instance to the form
                    layout="vertical"
                    onFinish={handleReviewSubmit}
                >
                    {/* Rating Input */}
                    <Form.Item
                        name="rating"
                        label="Rating"
                        rules={[
                            {
                                required: true,
                                message: "Please rate the product!",
                            },
                        ]}
                    >
                        <Rate />
                    </Form.Item>

                    {/* Comment Input */}
                    <Form.Item
                        name="comment"
                        label="Comment"
                        rules={[
                            {
                                required: true,
                                message: "Please provide a comment",
                            },
                        ]}
                    >
                        <Input.TextArea
                            rows={4}
                            placeholder="Write your review"
                        />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-magenta-500"
                        >
                            Submit Review
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
