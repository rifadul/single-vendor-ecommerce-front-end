import { useState } from "react";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import { Modal } from "antd";
import AddressForm from "./AddressForm";
import { useAddress } from "@/contexts/AddressContext";

const AddressItem = ({ address }) => {
    const {
        addresses,
        loading,
        error,
        fetchAddresses,
        deleteAddress,
        updateAddress,
    } = useAddress();
    const [modalOpen, setModalOpen] = useState(false);

    const handleDelete = () => {
        deleteAddress(address?.id);
    };

    const handleUpdate = (values) => {
        updateAddress(address?.id, values);
    };

    return (
        <div
            className={`flex items-center justify-between px-5 py-6 mb-4 border rounded ${
                address.defaultAddress
                    ? "border-magenta-600"
                    : "border-none bg-neutral-10"
            }`}
        >
            <div className="flex items-center">
                <input
                    type="radio"
                    name="address"
                    checked={address.defaultAddress}
                    className="text-magenta-500 accent-magenta-600"
                    readOnly
                />
                <div className="ml-4">
                    <div className="flex items-center">
                        <h3 className="text-base font-poppins font-medium text-black-800">
                            {address.name}
                        </h3>
                        {address.defaultAddress && (
                            <span className="ml-2 px-3 py-2 text-xs font-medium bg-neutral-20 text-neutral-300 rounded">
                                Default
                            </span>
                        )}
                    </div>
                    <p className="text-neutral-300  font-medium">
                        {address.address}, {address.city}, {address.state},{" "}
                        {address.zipcode}, {address.country}
                    </p>
                </div>
            </div>
            <div className="flex space-x-2 pl-2 border-l">
                <button className="p-2" onClick={() => setModalOpen(true)}>
                    <Image
                        alt="add to cart icon"
                        src={Icons.edit}
                        width={24}
                        height={24}
                    />
                </button>
                <button className="p-2" onClick={handleDelete}>
                    <Image
                        alt="add to cart icon"
                        src={Icons.trash}
                        width={24}
                        height={24}
                    />
                </button>
            </div>

            <Modal
                title={<span className="py-6">Update new address</span>}
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={null}
                centered
            >
                <AddressForm
                    handleFinish={handleUpdate}
                    initialValues={address}
                />
            </Modal>
        </div>
    );
};

export default AddressItem;
