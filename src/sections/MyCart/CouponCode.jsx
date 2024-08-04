import { useState } from "react";

const CouponCode = ({ applyCoupon }) => {
    const [code, setCode] = useState("");

    const handleApply = () => {
        applyCoupon(code);
        setCode("");
    };

    return (
        <div className="py-6 px-4 border">
            <label className="block mb-4 text-black-1000">
                Coupon code <span className="text-neutral-300">(Optional)</span>
            </label>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="border text-black-1000 rounded-l px-4 py-3 w-full outline-none"
                    placeholder="e.g. paooli40"
                />
                <button
                    onClick={handleApply}
                    className="bg-magenta-600 text-white px-4 py-2 rounded-r font-medium"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default CouponCode;
