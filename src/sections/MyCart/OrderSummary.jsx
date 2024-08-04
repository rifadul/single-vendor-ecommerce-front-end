import { Divider } from "antd";
import React from "react";

const OrderSummary = ({
    totalItems,
    subtotal,
    tax,
    shipping,
    discount,
    total,
    coupon,
}) => {
    return (
        <div className="border py-6 px-4 flex flex-col gap-4">
            <div>
                <span className="text-black-1000 text-sm font-medium">
                    Total items
                </span>
                <span className="float-right">{totalItems}</span>
            </div>
            <Divider className="p-0 m-0" dashed />
            <div className="flex flex-col gap-2">
                <div className="text-neutral-600 font-normal text-sm">
                    <span className="">Sub total</span>
                    <span className="float-right">${subtotal}</span>
                </div>
                <div className="text-neutral-600 font-normal text-sm">
                    <span className="">TAX</span>
                    <span className="float-right">${tax}</span>
                </div>
                <div className="text-neutral-600 font-normal text-sm">
                    <span>Shipping Charge</span>
                    <span className="float-right">${shipping}</span>
                </div>
                <div className="text-neutral-600 font-normal text-sm capitalize">
                    <span>
                        Discount {coupon && `(${coupon?.discount_type})`}
                    </span>
                    <span className="float-right text-red-500">
                        - ${discount}
                    </span>
                </div>
                {coupon && (
                    <div className="text-neutral-600 font-normal text-sm capitalize">
                        <span>Applied coupon</span>
                        <span className="float-right font-bold">
                            {" "}
                            {coupon?.code}
                        </span>
                    </div>
                )}
            </div>
            <Divider className="p-0 m-0" dashed />

            <div>
                <span className="text-black-1000 text-sm font-medium">
                    Total
                </span>
                <span className="float-right">${total}</span>
            </div>
        </div>
    );
};

export default OrderSummary;
