import React from "react";
import { Switch } from "antd";
import AddressItem from "./AddressItem";

const AddressSection = ({
    addresses,
    selectedAddress,
    setSelectedAddress,
    billingAddress,
    setBillingAddress,
    selectedBillingAddress,
    setSelectedBillingAddress,
}) => {
    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.id);
    };

    const handleBillingAddressChange = (checked) => {
        setBillingAddress(checked);
    };

    const handleBillingAddressSelect = (event) => {
        setSelectedBillingAddress(event.target.id);
    };

    return (
        <div>
            <div className="bg-white rounded shadow-md mb-6">
                <p className="text-base font-medium font-poppins bg-neutral-30 py-4 px-2">
                    1. SHIPPING Address
                </p>
                <div className="px-4 py-6">
                    <div className="max-h-96 overflow-y-scroll scrollbar-hide">
                        {addresses.map((address, key) => (
                            <AddressItem
                                key={key}
                                address={address}
                                selectedAddress={selectedAddress}
                                handleAddressChange={handleAddressChange}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded shadow-md">
                <p className="text-base font-medium font-poppins bg-neutral-30 py-4 px-2">
                    2. Billing Address
                </p>
                <div className="px-4 py-6">
                    <div className="flex justify-between items-center">
                        <p className="text-neutral-300 py-4">
                            Same as delivery address{" "}
                        </p>
                        <Switch
                            checked={billingAddress}
                            defaultChecked
                            onChange={handleBillingAddressChange}
                        />
                    </div>
                    {!billingAddress && (
                        <div className="max-h-96 overflow-y-scroll scrollbar-hide">
                            {addresses.map((address, key) => (
                                <AddressItem
                                    key={key}
                                    address={address}
                                    selectedAddress={selectedBillingAddress}
                                    handleAddressChange={
                                        handleBillingAddressSelect
                                    }
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddressSection;
