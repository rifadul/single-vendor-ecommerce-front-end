import CustomForm from "@/components/Forms";
import FormContainer from "@/components/Forms/FormContainer";
import { Checkbox, Form } from "antd";

function AddressForm({ handleFinish, initialValues = {} }) {
    return (
        <FormContainer
            onFinish={handleFinish}
            initialValues={initialValues}
            buttonName="Update Address"
        >
            <CustomForm.InputField
                label="Address name"
                name="name"
                isRequired={true}
                errorMessage="Please input your address name!"
            />
            <CustomForm.InputField
                label="Country name"
                name="country"
                isRequired={true}
                errorMessage="Please input your country name!"
            />
            <CustomForm.InputField
                label="State Number"
                name="state"
                isRequired={true}
                placeholder="+880123456789"
                errorMessage="Please input your state!"
            />
            <CustomForm.InputField
                label="City name"
                name="city"
                isRequired={true}
                errorMessage="Please input your city!"
            />
            <CustomForm.InputField
                label="Zip Code"
                name="zipcode"
                isRequired={true}
                errorMessage="Please input your zipcode!"
            />
            <CustomForm.TextareaInputField
                label="Address"
                name="address"
                min={3}
                isRequired={true}
                errorMessage="Please input your address!"
                dependenciesFieldName={"password"}
            />
            <Form.Item
                name="defaultAddress"
                valuePropName="checked"
                className="flex items-center m-0 "
            >
                <Checkbox className="  text-neutral-300 text-sm font-semibold">
                    Default Address
                </Checkbox>
            </Form.Item>
        </FormContainer>
    );
}

export default AddressForm;
