"use client";
import { useAddress } from "@/contexts/AddressContext";
import { useCart } from "@/contexts/CartContext";
import { useOrder } from "@/contexts/OrderContext";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import OrderSummary from "../MyCart/OrderSummary";
import AddressSection from "./AddressSection";
import RadioGroup from "./RadioGroup";

function CheckoutPage() {
    const { addresses, fetchAddresses, loading: addressLoading } = useAddress();
    const {
        shippingMethods,
        fetchShippingMethods,
        placeOrder,
        loading: orderLoading,
    } = useOrder();
    const { cart } = useCart();

    useEffect(() => {
        fetchAddresses();
        fetchShippingMethods();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this runs only once

    const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState("");
    const [
        deliveryAddressIsBillingAddress,
        setDeliveryAddressIsBillingAddress,
    ] = useState(false);
    const [selectedBillingAddress, setSelectedBillingAddress] = useState("");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const [selectedShippingMethod, setSelectedShippingMethod] = useState("");

    const paymentMethods = [
        {
            id: "stripe",
            name: "Debit Card / Credit Card",
        },
        {
            id: "cash_on_delivery",
            name: "Cash on delivery",
        },
    ];

    const handlePlaceOrder = () => {
        if (selectedDeliveryAddress === "") {
            return toast.error("Please select shipping address");
        }
        if (!deliveryAddressIsBillingAddress && selectedBillingAddress === "") {
            return toast.error("Please select billing address");
        }
        if (selectedShippingMethod === "") {
            return toast.error("Please select shipping method");
        }
        if (selectedPaymentMethod === "") {
            return toast.error("Please select payment method");
        }

        let orderBody = {
            shipping_address: selectedDeliveryAddress,
            billing_address: deliveryAddressIsBillingAddress
                ? selectedDeliveryAddress
                : selectedBillingAddress,
            shipping_method: selectedShippingMethod,
            payment_method: selectedPaymentMethod,
        };
        placeOrder(orderBody);
    };

    return (
        <div className="container mx-auto space-y-9">
            <Spin fullscreen spinning={addressLoading || orderLoading} />
            <div className="pb-6 border-b">
                <p className="text-xl font-semibold font-poppins text-black-1000">
                    Checkout
                </p>
                <p className="text-neutral-300 text-base font-poppins">
                    Please fill in the fields below and place order to complete
                    your purchase!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <AddressSection
                        addresses={addresses}
                        selectedDeliveryAddress={selectedDeliveryAddress}
                        setSelectedDeliveryAddress={setSelectedDeliveryAddress}
                        deliveryAddressIsBillingAddress={
                            deliveryAddressIsBillingAddress
                        }
                        setDeliveryAddressIsBillingAddress={
                            setDeliveryAddressIsBillingAddress
                        }
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

                <div className="">
                    <div className="bg-white px-4 pt-2 pb-6 rounded flex flex-col gap-6">
                        <h2 className="font-semibold text-base text-center text-black-1000">
                            ORDER SUMMARY
                        </h2>
                        <OrderSummary
                            totalItems={cart?.items?.length}
                            subtotal={cart?.subtotal}
                            tax={cart?.tax}
                            shipping={cart?.shipping}
                            discount={cart?.discount}
                            total={cart?.total}
                            coupon={cart?.coupon}
                        />

                        <button
                            className="bg-blue-900 font-semibold text-white px-6 w-full py-4 rounded-sm"
                            onClick={handlePlaceOrder}
                        >
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
