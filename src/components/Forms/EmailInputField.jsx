import { Form, Input } from "antd";
import React from "react";
import Label from "./Label";
import RequiredErrorMessage from "../common/RequiredErrorMessage";

function EmailInputField({
  label,
  name,
  placeholder = "xyz@abc.com",
  isRequired = false,
  errorMessage = "Please input your email!",
  onChange,
  customRequiredIconInLabelText = false,
}) {
  return (
    <Form.Item
      label={
        <Label isRequiredIconShow={customRequiredIconInLabelText}>
          {label}
        </Label>
      }
      name={name}
      normalize={(value) => value.trim()}
      rules={[
        {
          required: isRequired,
          whitespace: false,
          message: <RequiredErrorMessage>{errorMessage}</RequiredErrorMessage>,
        },
        {
          type: "email",
          message: (
            <RequiredErrorMessage>
              The input is not valid email!
            </RequiredErrorMessage>
          ),
          warningOnly: true,
        },
        {
          validator: (_, value) =>
            !value.includes(" ")
              ? Promise.resolve()
              : Promise.reject(new Error("No spaces allowed")),
        },
      ]}
      className="mb-0"
    >
      <Input
        placeholder={placeholder}
        className="font-medium font-poppins text-neutral-100 py-3 px-4 rounded"
        onChange={onChange}
      />
    </Form.Item>
  );
}

export default EmailInputField;
