import React from "react";

function CartTableHeading() {
    return (
        <div className="flex justify-between items-center p-4 border-b">
            <p className="font-poppins font-medium text-sm text-neutral-600 w-full md:w-6/12">
                Product
            </p>
            <p className="font-poppins font-medium text-sm text-neutral-600 hidden md:inline-block md:w-2/12 text-left">
                Price
            </p>
            <p className="font-poppins font-medium text-sm text-neutral-600 hidden md:inline-block w-1/12 text-center">
                Quantity
            </p>
            <p className="font-poppins font-medium text-sm text-neutral-600 hidden md:inline-block w-2/12 text-right">
                Total Price
            </p>
            <p className="font-poppins font-medium text-sm text-neutral-600 hidden md:inline-block w-1/12 text-center">
                Action
            </p>
        </div>
    );
}

export default CartTableHeading;
