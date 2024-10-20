import CustomForm from "@/components/Forms";
import FormContainer from "@/components/Forms/FormContainer";
import { Form, Modal } from "antd";

function PhoneNumberUpdateForm({ modalOpen, onClose, handleFinish }) {
    const [form] = Form.useForm();

    const handleOnFinish = (values) => {
        onClose(false);
        form.resetFields();
        handleFinish(values);
    };

    const handleCancel = () => {
        onClose(false);
        form.resetFields();
    };

    return (
        <Modal open={modalOpen} onCancel={handleCancel} footer={null} centered>
            <FormContainer
                form={form}
                onFinish={handleOnFinish}
                buttonName="Update Phone Number"
            >
                <CustomForm.PasswordInputField
                    label="Password"
                    name="password"
                    isRequired={true}
                    min={3}
                    errorMessage="Please input your password!"
                />
                <CustomForm.InputField
                    label="Phone Number"
                    name="existing_phone"
                    isRequired={true}
                    placeholder="+880123456789"
                    errorMessage="Please input your phone number with country code!"
                />
                <CustomForm.InputField
                    label="Enter New Phone Number"
                    name="new_phone"
                    isRequired={true}
                    placeholder="+880123456789"
                    errorMessage="Please input new phone number with country code!"
                />
            </FormContainer>
        </Modal>
    );
}

export default PhoneNumberUpdateForm;
