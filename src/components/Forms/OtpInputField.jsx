import React, { useState, useEffect, useRef } from "react";
import { Input } from "antd";

const OtpInputField = ({ length = 6, size = "large", onChange }) => {
    const [values, setValues] = useState(Array(length).fill(""));
    const inputs = useRef([]);

    const focusNext = (index) => {
        if (index < length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const focusPrev = (index) => {
        if (index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return;

        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value) {
            focusNext(index);
        }
        onChange(newValues.join(""));
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            focusPrev(index);
        }
    };

    return (
        <div className="flex space-x-2">
            {values.map((value, index) => (
                <Input
                    key={index}
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                    size={size}
                    className="w-12 h-12 text-center mx-1 font-poppins"
                    style={{
                        flex: 1,
                        height: "56px",
                        width: "56px",
                        marginLeft: index > 0 ? "10px" : "0",
                        border: "1px solid #5D6B82",
                        borderRadius: "10px",
                        color: "#3A3A3A",
                        fontSize: "15px",
                        fontWeight: 500,
                    }}
                />
            ))}
        </div>
    );
};

export default OtpInputField;
