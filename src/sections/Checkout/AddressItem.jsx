import React from "react";
import AddressInfo from "../Address/AddressInfo";

const AddressItem = ({ address, selectedAddress, handleAddressChange }) => {
    return (
        <div
            className={`flex items-center justify-between px-5 py-6 mb-4 border rounded ${
                selectedAddress === address?.id
                    ? "border-magenta-600"
                    : "border-none bg-neutral-10"
            }`}
        >
            <div className="flex items-center">
                <input
                    type="radio"
                    id={address?.id}
                    checked={selectedAddress === address?.id}
                    className="text-magenta-500 accent-magenta-600"
                    onChange={handleAddressChange}
                />
                <AddressInfo address={address} />
            </div>
        </div>
    );
};

export default AddressItem;
