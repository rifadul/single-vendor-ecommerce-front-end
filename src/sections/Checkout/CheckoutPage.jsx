"use client";
import React, { useEffect, useState } from "react";
import { useAddress } from "@/contexts/AddressContext";
import AddressSection from "./AddressSection";
import RadioGroup from "./RadioGroup";

function CheckoutPage() {
    const { addresses, fetchAddresses } = useAddress();

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    const [selectedAddress, setSelectedAddress] = useState(null);
    const [billingAddress, setBillingAddress] = useState(false);
    const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);

    const shippingMethods = [
        {
            id: "standard",
            name: "Standard delivery",
            description: "Standard delivery normally takes 48 to 72 hours",
        },
        {
            id: "express",
            name: "Express delivery",
            description: "Standard delivery normally takes 24 hours",
        },
    ];

    const paymentMethods = [
        {
            id: "debitCard",
            name: "Debit Card / Credit Card",
        },
        {
            id: "creditCard",
            name: "Credit Card",
        },
    ];

    return (
        <div className="container mx-auto space-y-9">
            <div className="pb-6 border-b">
                <p className="text-xl font-semibold font-poppins text-black-1000">
                    Checkout
                </p>
                <p className="text-neutral-300 text-base font-poppins">
                    Please fill in the fields below and place order to complete
                    your purchase!
                </p>
            </div>
            <AddressSection
                addresses={addresses}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
                billingAddress={billingAddress}
                setBillingAddress={setBillingAddress}
                selectedBillingAddress={selectedBillingAddress}
                setSelectedBillingAddress={setSelectedBillingAddress}
            />
            <RadioGroup
                items={shippingMethods}
                selectedItem={selectedShippingMethod}
                handleChange={(event) =>
                    setSelectedShippingMethod(event.target.id)
                }
                title="3. SHIPPING METHOD"
            />
            <RadioGroup
                items={paymentMethods}
                selectedItem={selectedPaymentMethod}
                handleChange={(event) =>
                    setSelectedPaymentMethod(event.target.id)
                }
                title="4. PAYMENT METHOD"
            />
        </div>
    );
}

export default CheckoutPage;
