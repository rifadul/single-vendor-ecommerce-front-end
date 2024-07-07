import { Form, Input } from "antd";
import React from "react";
import Label from "./Label";
import RequiredErrorMessage from "../common/RequiredErrorMessage";

function UrlInputField({
    label,
    name,
    placeholder = "https://xyz.abc",
    isRequired = false,
    errorMessage = "Please enter url!",
    onChange,
    customRequiredIconInLabelText = false,
}) {
    return (
        <Form.Item
            label={<Label isRequiredIconShow={customRequiredIconInLabelText}>{label}</Label>}
            name={name}
            rules={[
                { required: isRequired, message: <RequiredErrorMessage>{errorMessage}</RequiredErrorMessage> },
                {
                    type: "url",
                    warningOnly: true,
                    message: <RequiredErrorMessage>Please enter a valid url.</RequiredErrorMessage>,
                },
            ]}
            className="mb-0"
        >
            <Input
                placeholder={placeholder}
                className="font-medium font-poppins text-brand-blue-400 py-3 px-4 rounded"
                type="url"
                onChange={onChange}
            />
        </Form.Item>
    );
}

export default UrlInputField;
