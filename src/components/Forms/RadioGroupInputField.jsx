import { Form, Radio, Select } from "antd";
import React from "react";
import RequiredErrorMessage from "../common/RequiredErrorMessage";
import Label from "./Label";

function RadioGroupInputField({
    label,
    name,
    isRequired = false,
    errorMessage = "Error message",
    options,
    customRequiredIconInLabelText = false,
    onChange,
    className,
}) {
    return (
        <Form.Item
            label={
                <Label
                    isRequiredIconShow={customRequiredIconInLabelText}
                    className="flex justify-between"
                >
                    {label}
                </Label>
            }
            name={name}
            rules={[
                {
                    required: isRequired,
                    message: (
                        <RequiredErrorMessage>
                            {isRequired ? errorMessage : ""}
                        </RequiredErrorMessage>
                    ),
                },
            ]}
            className={`mb-0 w-full flex-1 ${className}`}
        >
            <Radio.Group options={options} onChange={onChange} />
        </Form.Item>
    );
}

export default RadioGroupInputField;
