"use client";
import CustomForm from "@/components/Forms";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import FormContainer from "@/components/Forms/FormContainer";
import RequiredErrorMessage from "@/components/common/RequiredErrorMessage";
import SocialButtons from "@/components/common/socialButtons/SocialButtons";
import { USER_SIGN_UP_API_URL } from "@/helpers/apiUrls";
import { SIGN_IN_PATH } from "@/helpers/slug";
import MakeApiCall from "@/services/MakeApiCall";
import { debounce } from "@/utils";
import { Checkbox, Form, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function SignUpForm() {
    const router = useRouter(); // Next.js useRouter hook
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (values) => {
        delete values.acceptTP;
        const credentials = {
            ...values,
            role: "0172ca90-970a-4d4e-9ad8-32f9b6750e0b", // here need to replace with role id or make it dynamic
        };
        setLoading(true);
        try {
            const response = await MakeApiCall({
                apiUrl: USER_SIGN_UP_API_URL,
                method: "POST",
                body: credentials,
            });
            toast.success("Signed in successfully!");
            router.push(SIGN_IN_PATH);
        } catch (error) {
            const errorMsg = JSON.parse(error.message);
            for (const [key, value] of Object.entries(errorMsg)) {
                toast.error(`${value.join(", ")}`);
            }
        } finally {
            setLoading(false);
        }
    };

    // submit this form with debounce.
    const debounceOnFinish = debounce(handleFormSubmit, 200);

    return (
        <FormCardContainer cardTitle="Sign up">
            <Spin fullscreen spinning={loading} />
            <p className="text-[40px] font-bold text-blue-900 text-center">
                SHARK WAVE
            </p>
            <div className="space-y-9">
                <div className="space-y-3">
                    <p className="text-black-1000 font-semibold text-xl">
                        Sign up
                    </p>
                    <p className="text-neutral-300 text-sm">
                        Please fill up the form to sign up!
                    </p>
                </div>

                <FormContainer onFinish={debounceOnFinish} buttonName="Sign up">
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
                    <CustomForm.InputField
                        label="Phone Number"
                        name="phone_number"
                        isRequired={true}
                        placeholder="+880123456789"
                        errorMessage="Please input your phone number with country code!"
                    />
                    <CustomForm.EmailInputField
                        label="Email"
                        name="email"
                        isRequired={true}
                        errorMessage="Please input your email!"
                    />
                    <CustomForm.PasswordInputField
                        label="Password"
                        name="password"
                        isRequired={true}
                        errorMessage="Please input your password!"
                    />
                    <CustomForm.PasswordInputField
                        label="Confirm Password"
                        name="password1"
                        isRequired={true}
                        errorMessage="Please input your password again!"
                        dependenciesFieldName={"password"}
                    />
                    <Form.Item
                        name="acceptTP"
                        valuePropName="checked"
                        className="flex items-center m-0 "
                        rules={[
                            {
                                required: true,
                                message: (
                                    <RequiredErrorMessage>
                                        Please accept the Terms & Conditions to
                                        proceed!
                                    </RequiredErrorMessage>
                                ),
                            },
                        ]}
                    >
                        <Checkbox className="  text-neutral-300 text-sm font-semibold">
                            By signing up, you agree to our{" "}
                            <Link
                                href="#"
                                className="text-blue-900 font-medium font-poppins hover:text-blue-900"
                            >
                                Terms & conditions
                            </Link>
                        </Checkbox>
                    </Form.Item>

                    <SocialButtons />
                </FormContainer>
            </div>

            <p className="font-medium text-neutral-300 text-center">
                Don't have an account ?{" "}
                <Link
                    className="text-blue-700 font-semibold"
                    href={SIGN_IN_PATH}
                >
                    Sign in
                </Link>
            </p>
        </FormCardContainer>
    );
}

export default SignUpForm;
