// import TextArea from 'antd/es/input/TextArea'
import React from "react";
import Label from "./Label";
import RequiredErrorMessage from "../common/RequiredErrorMessage";
import { Form, Input } from "antd";

function TextareaInputField({
    label,
    name,
    placeholder,
    isRequired = false,
    errorMessage = "Error message",
    rows = 6,
    maxLength = 20000,
    customRequiredIconInLabelText = false,
    showCount = false,
    min = 10,
    onChange,
}) {
    return (
        <Form.Item
            label={
                <Label isRequiredIconShow={customRequiredIconInLabelText}>
                    {label}
                </Label>
            }
            name={name}
            rules={[
                {
                    required: isRequired,
                    message: (
                        <RequiredErrorMessage>
                            {errorMessage}
                        </RequiredErrorMessage>
                    ),
                },
                {
                    min: min,
                    message: (
                        <RequiredErrorMessage>
                            Please provide a value minimum of {min} characters!
                        </RequiredErrorMessage>
                    ),
                },
            ]}
            className="mb-0"
        >
            <Input.TextArea
                showCount={showCount}
                rows={rows}
                placeholder={placeholder}
                maxLength={maxLength}
                className="font-medium font-poppins text-neutral-100 py-3 px-4 rounded"
                onChange={onChange}
            />
        </Form.Item>
    );
}

export default TextareaInputField;
