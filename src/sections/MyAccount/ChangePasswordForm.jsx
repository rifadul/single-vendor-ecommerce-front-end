import CustomForm from "@/components/Forms";
import FormContainer from "@/components/Forms/FormContainer";
import { Form, Modal } from "antd";

function ChangePasswordForm({ modalOpen, onClose, handleFinish }) {
    const [form] = Form.useForm();

    const handleOnFinish = (values) => {
        onClose(false);
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
                buttonName="Change Password"
            >
                <CustomForm.PasswordInputField
                    label="Current Password"
                    name="old_password"
                    isRequired={true}
                    min={3}
                    errorMessage="Please input current password!"
                />

                <CustomForm.PasswordInputField
                    label="New Password"
                    name="new_password"
                    isRequired={true}
                    errorMessage="Please input new password!"
                />
                <CustomForm.PasswordInputField
                    label="Confirm New Password"
                    name="new_password1"
                    isRequired={true}
                    errorMessage="Please input new password again!"
                    dependenciesFieldName={"new_password"}
                />
            </FormContainer>
        </Modal>
    );
}

export default ChangePasswordForm;
