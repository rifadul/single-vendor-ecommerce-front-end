import React from "react";
import Label from "./Label";
import { Form, Input } from "antd";
import RequiredErrorMessage from "../common/RequiredErrorMessage";

function PasswordInputField({
    label,
    name,
    placeholder = "Min. 8 Characters",
    isRequired = false,
    errorMessage = "Please input your password!",
    onChange,
    customRequiredIconInLabelText = false,
    isConfirmed,
    min = 8,
}) {
    return (
        <>
            {isConfirmed ? (
                <Form.Item
                    label={
                        <Label
                            isRequiredIconShow={customRequiredIconInLabelText}
                        >
                            {label}
                        </Label>
                    }
                    name={name}
                    dependencies={[isConfirmed]}
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
                                    Please provide a value longer than {min}{" "}
                                    characters!
                                </RequiredErrorMessage>
                            ),
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue(isConfirmed) === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "The new password that you entered do not match!"
                                    )
                                );
                            },
                        }),
                    ]}
                    className="mb-0"
                >
                    <Input.Password
                        placeholder={placeholder}
                        className="font-medium font-poppins text-brand-blue-400 py-3 px-4 rounded"
                        onChange={onChange}
                    />
                </Form.Item>
            ) : (
                <Form.Item
                    label={
                        <Label
                            isRequiredIconShow={customRequiredIconInLabelText}
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
                                    {errorMessage}
                                </RequiredErrorMessage>
                            ),
                        },
                        {
                            min: min,
                            message: (
                                <RequiredErrorMessage>
                                    Please provide a value longer than {min}{" "}
                                    characters!
                                </RequiredErrorMessage>
                            ),
                        },
                    ]}
                    className="mb-0"
                >
                    <Input.Password
                        placeholder={placeholder}
                        className="font-medium font-poppins text-brand-blue-400 py-3 px-4 rounded"
                        onChange={onChange}
                    />
                </Form.Item>
            )}
        </>
    );
}

export default PasswordInputField;
