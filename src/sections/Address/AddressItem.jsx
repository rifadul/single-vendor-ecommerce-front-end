import { useAddress } from "@/contexts/AddressContext";
import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import Icons from "../../../public/assets/Icons";
import AddressForm from "./AddressForm";
import AddressInfo from "./AddressInfo";

const AddressItem = ({ address }) => {
    const { deleteAddress, updateAddress } = useAddress();
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
                    ? "border-blue-900"
                    : "border-none bg-neutral-10"
            }`}
        >
            <div className="flex items-center">
                <input
                    type="radio"
                    name="address"
                    checked={address.defaultAddress}
                    className="text-blue-700 accent-blue-900"
                    readOnly
                />
                <AddressInfo address={address} />
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
