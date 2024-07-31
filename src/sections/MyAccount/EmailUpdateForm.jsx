import CustomForm from "@/components/Forms";
import FormContainer from "@/components/Forms/FormContainer";
import { Form, Modal } from "antd";

function EmailUpdateForm({
    modalOpen,
    onClose,
    handleFinish,
    initialValues = {},
}) {
    const [form] = Form.useForm();

    const handleCancel = () => {
        onClose(false);
        form.resetFields();
    };

    return (
        <Modal
            title={<span className="py-6">Update Email</span>}
            open={modalOpen}
            onCancel={handleCancel}
            footer={null}
            centered
        >
            <FormContainer
                form={form}
                onFinish={handleFinish}
                buttonName="Update Email"
            >
                <CustomForm.PasswordInputField
                    label="Password"
                    name="password"
                    isRequired={true}
                    min={3}
                    errorMessage="Please input your password!"
                />

                <CustomForm.EmailInputField
                    label="Enter Email"
                    name="existing_email"
                    isRequired={true}
                    errorMessage="Please input your new email!"
                />
                <CustomForm.EmailInputField
                    label="Enter New Email"
                    name="new_email"
                    isRequired={true}
                    errorMessage="Please input your new email!"
                />
            </FormContainer>
        </Modal>
    );
}

export default EmailUpdateForm;
