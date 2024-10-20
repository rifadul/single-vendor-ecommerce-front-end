import CustomForm from "@/components/Forms";
import FormContainer from "@/components/Forms/FormContainer";
import { Form, Modal } from "antd";

function NameUpdateForm({
    modalOpen,
    onClose,
    handleFinish,
    initialValues = {},
}) {
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
                initialValues={initialValues}
                form={form}
                onFinish={handleOnFinish}
                buttonName="Update User Name"
            >
                <CustomForm.InputField
                    label="First name"
                    name="first_name"
                    isRequired={true}
                    errorMessage="Please input your first name!"
                />
                <CustomForm.InputField
                    label="Last name"
                    name="last_name"
                    isRequired={true}
                    errorMessage="Please input your last name!"
                />
            </FormContainer>
        </Modal>
    );
}

export default NameUpdateForm;
