import React, { useState } from "react";
import { Modal, Switch } from "antd";
import AddressItem from "./AddressItem";
import NoAddressAddedMessage from "../Address/NoAddressAddedMessage";
import AddressForm from "../Address/AddressForm";
import { useAddress } from "@/contexts/AddressContext";

const AddressSection = ({
    addresses,
    selectedDeliveryAddress,
    setSelectedDeliveryAddress,
    deliveryAddressIsBillingAddress,
    setDeliveryAddressIsBillingAddress,
    selectedBillingAddress,
    setSelectedBillingAddress,
}) => {
    const { createAddress } = useAddress();
    const [visible, setVisible] = useState(false);

    const handleFinish = (values) => {
        createAddress(values);
        setVisible(false);
    };

    const handleAddressChange = (event) => {
        setSelectedDeliveryAddress(event.target.id);
    };

    const handleBillingAddressChange = (checked) => {
        setDeliveryAddressIsBillingAddress(checked);
    };

    const handleBillingAddressSelect = (event) => {
        setSelectedBillingAddress(event.target.id);
    };

    return (
        <div>
            <div className="bg-white rounded shadow-md mb-6">
                <div className="bg-neutral-30 py-4 px-2 flex justify-between items-center">
                    <p className="text-base font-medium font-poppins">
                        1. SHIPPING Address
                    </p>
                    {addresses.length < !0 && (
                        <p
                            onClick={() => setVisible(true)}
                            className="text-magenta-600 hover:underline font-medium cursor-pointer"
                        >
                            Create new address
                        </p>
                    )}
                </div>
                <div className="px-4 py-6">
                    <div className="max-h-96 overflow-y-scroll scrollbar-hide">
                        {addresses.length > 0 ? (
                            addresses.map((address, key) => (
                                <AddressItem
                                    key={key}
                                    address={address}
                                    selectedAddress={selectedDeliveryAddress}
                                    handleAddressChange={handleAddressChange}
                                />
                            ))
                        ) : (
                            <NoAddressAddedMessage />
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded shadow-md">
                <div className="bg-neutral-30 py-4 px-2 flex justify-between items-center">
                    <p className="text-base font-medium font-poppins">
                        2. Billing Address
                    </p>
                    {addresses.length < !0 && (
                        <p
                            onClick={() => setVisible(true)}
                            className="text-magenta-600 hover:underline font-medium cursor-pointer"
                        >
                            Create new address
                        </p>
                    )}
                </div>
                <div className="px-4 py-6">
                    {addresses.length > 0 ? (
                        <>
                            <div className="flex justify-between items-center">
                                <p className="text-neutral-300 py-4">
                                    Same as delivery address{" "}
                                </p>
                                <Switch
                                    checked={deliveryAddressIsBillingAddress}
                                    defaultChecked
                                    onChange={handleBillingAddressChange}
                                />
                            </div>
                            {!deliveryAddressIsBillingAddress && (
                                <div className="max-h-96 overflow-y-scroll scrollbar-hide">
                                    {addresses.map((address, key) => (
                                        <AddressItem
                                            key={key}
                                            address={address}
                                            selectedAddress={
                                                selectedBillingAddress
                                            }
                                            handleAddressChange={
                                                handleBillingAddressSelect
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <NoAddressAddedMessage />
                    )}
                </div>
            </div>

            <Modal
                title={<span className="py-6">Create new address</span>}
                open={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                centered
            >
                <AddressForm handleFinish={handleFinish} />
            </Modal>
        </div>
    );
};

export default AddressSection;
