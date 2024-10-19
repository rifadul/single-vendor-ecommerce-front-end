import React from "react";
import Label from "./Label";
import { Form, Rate } from "antd";
import RequiredErrorMessage from "../common/RequiredErrorMessage";

function RatingInputField({
    label,
    name,
    isRequired = false,
    errorMessage = "Please input rating!",
    onChange,
}) {
    return (
        <Form.Item
            label={<Label>{label}</Label>}
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
            ]}
            className="mb-0"
        >
            <Rate
                onChange={onChange}
                style={{
                    color: "#F08200",
                }}
            />
        </Form.Item>
    );
}

export default RatingInputField;
