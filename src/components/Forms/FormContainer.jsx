import { Form } from "antd";
import React from "react";
import FormFieldsContainer from "./FormFieldsContainer";
import Buttons from "../Buttons";

function FormContainer({ onFinish, initialValues = {}, buttonName, children }) {
    return (
        <Form
            layout="vertical"
            name="signin"
            initialValues={{ ...initialValues, address: "hello" }}
            onFinish={onFinish}
            className="space-y-9 font-poppins font-normal"
        >
            <FormFieldsContainer>{children}</FormFieldsContainer>
            <Buttons.PrimaryBtn label={buttonName} />
        </Form>
    );
}

export default FormContainer;
