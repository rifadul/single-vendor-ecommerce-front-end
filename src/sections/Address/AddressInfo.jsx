import React from "react";

function AddressInfo({ address }) {
    return (
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
    );
}

export default AddressInfo;
