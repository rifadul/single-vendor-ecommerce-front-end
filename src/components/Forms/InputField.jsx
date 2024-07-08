import { Form, Input } from "antd";
import React from "react";
import Label from "./Label";
import RequiredErrorMessage from "../common/RequiredErrorMessage";

function InputField({
  label,
  name,
  placeholder,
  isRequired = false,
  errorMessage = "Error message",
  type = "text",
  onChange,
  customRequiredIconInLabelText = false,
  min = 3,
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
          message: <RequiredErrorMessage>{errorMessage}</RequiredErrorMessage>,
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
      <Input
        placeholder={placeholder}
        className="font-medium font-poppins text-neutral-100 py-3 px-4 rounded"
        type={type}
        onChange={onChange}
      />
    </Form.Item>
  );
}

export default InputField;
