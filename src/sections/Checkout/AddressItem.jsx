import AddressInfo from "../Address/AddressInfo";

const AddressItem = ({ address, selectedAddress, handleAddressChange }) => {
    return (
        <div
            className={`flex items-center justify-between px-5 py-6 mb-4 border rounded ${
                selectedAddress === address?.id
                    ? "border-blue-900"
                    : "border-none bg-neutral-10"
            }`}
        >
            <div className="flex items-center">
                <input
                    type="radio"
                    id={address?.id}
                    checked={selectedAddress === address?.id}
                    className="text-blue-700 accent-blue-900"
                    onChange={handleAddressChange}
                />
                <AddressInfo address={address} />
            </div>
        </div>
    );
};

export default AddressItem;
