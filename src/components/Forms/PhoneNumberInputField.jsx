import { Form, Input, InputNumber, Select } from "antd";
import React from "react";
// import PhoneNumberPrefix from "./PhoneNumberPrefix";
import Label from "./Label";

// Mapping of prefix values to their corresponding minimum lengths
const prefixMinLengthMap = {
  "+880": 10,
  "+1": 7,
  // Add more prefix values and their minimum lengths as needed
};

function PhoneNumberInputField({
  name = "primaryPhone",
  labelText = "Enter your phone number",
  prefixValue,
}) {
  const minPhoneNumberLength = prefixMinLengthMap[prefixValue] || 10;

  return (
    <Form.Item
      label={<Label>{labelText}</Label>}
      name={name}
      rules={[
        {
          required: true,
          message: "Please input your phone number!",
        },
        {
          min: minPhoneNumberLength,
          message: "Please enter valid phone number!",
        },
        {
          max: minPhoneNumberLength,
          message: "Please enter valid phone number!",
        },
      ]}
      className="w-full text-sm font-medium text-neutral-300 mb-0"
    >
      <Input
        type="number"
        addonBefore={<PhoneNumberPrefix />}
        className="w-full rounded"
        placeholder="1234567890"
      />
    </Form.Item>
  );
}

export default PhoneNumberInputField;

const PhoneNumberPrefix = () => {
  const { Option } = Select;
  return (
    <Form.Item name={"prefix"} value="+1" noStyle>
      <Select defaultValue="+880" className="flex items-center w-20">
        <Option value="+1">+1</Option>
        <Option value="+880">+880</Option>
      </Select>
    </Form.Item>
  );
};
