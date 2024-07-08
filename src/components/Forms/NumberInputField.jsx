import { Form, InputNumber } from "antd";
import React from "react";
import Label from "./Label";
import RequiredErrorMessage from "../common/RequiredErrorMessage";

function NumberInputField({
  label,
  name,
  placeholder,
  isRequired = false,
  errorMessage = "Error message",
  customRequiredIconInLabelText = false,
  onChange,
  min = 0,
  isMinEnabled = true, // new prop to conditionally enable min
  value,
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
          validator(_, value) {
            if (String(value).length < min) {
              return Promise.reject(
                <RequiredErrorMessage>
                  Please provide a value minimum of {min} characters!
                </RequiredErrorMessage>
              );
            }

            // if (isMinEnabled && String(value) <= 0) {
            //     return Promise.reject(
            //         <RequiredErrorMessage>
            //             Please provide a positive number!
            //         </RequiredErrorMessage>
            //     );
            // }

            return Promise.resolve();
          },
        },
      ]}
      className="mb-0"
    >
      <InputNumber
        placeholder={placeholder}
        controls={false}
        className="w-full py-2 rounded"
        // min={min}
        min={isMinEnabled ? min : undefined}
        value={value}
        onChange={onChange}
      />
    </Form.Item>
  );
}

export default NumberInputField;
