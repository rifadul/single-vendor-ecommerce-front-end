"use client";
import { useAddress } from "@/contexts/AddressContext";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import AddressItem from "./AddressItem";

function AddressPage() {
    const { addresses, loading, error, fetchAddresses, createAddress } =
        useAddress();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    const handleFinish = (values) => {
        createAddress(values);
        setVisible(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="space-y-8 overflow-y-auto scrollbar-hide">
            <div className="flex gap-1 md:justify-between items-center">
                <p className="text-base font-medium font-poppins text-neutral-300">
                    Choose your default address{" "}
                </p>

                <button
                    className="bg-blue-900 py-2 px-3 md:py-4 md:px-9 rounded-sm text-white font-semibold text-xs md:text-base hover:bg-blue-800 transition duration-300"
                    onClick={() => setVisible(true)}
                >
                    Add new address
                </button>
            </div>

            <div>
                {addresses.length > 0 ? (
                    addresses.map((address) => (
                        <AddressItem key={address.id} address={address} />
                    ))
                ) : (
                    <p className="text-base text-center py-10 font-medium font-poppins text-neutral-300">
                        No Address added
                    </p>
                )}
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
}

export default AddressPage;
