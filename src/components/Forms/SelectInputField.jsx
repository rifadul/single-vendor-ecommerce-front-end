import { Form, Select } from "antd";
import React from "react";
import RequiredErrorMessage from "../common/RequiredErrorMessage";
import Label from "./Label";

function SelectInputField({
    label,
    name,
    placeholder,
    isRequired = false,
    errorMessage = "Error message",
    options,
    mode = "",
    customRequiredIconInLabelText = false,
    onChange,
    addModalHandler,
    className,
}) {
    return (
        <div className="relative">
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
                <Select
                    showSearch
                    mode={mode}
                    style={{
                        width: "100%",
                        paddingY: "20px",
                    }}
                    filterOption={(input, option) =>
                        (option?.label.toLowerCase() ?? "").includes(
                            input.toLowerCase()
                        )
                    }
                    placeholder={placeholder}
                    options={options}
                    allowClear
                    className="h-12 flex-1 font-medium font-poppins text-neutral-100"
                    onChange={onChange}
                />
            </Form.Item>
            {addModalHandler && (
                <button
                    className="absolute top-0 right-0 text-neutral-300 font-medium"
                    type="button"
                    onClick={addModalHandler}
                >
                    + Add New {label}{" "}
                </button>
            )}
        </div>
    );
}

export default SelectInputField;
