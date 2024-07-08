"use client";
import CustomForm from "@/components/Forms";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import FormContainer from "@/components/Forms/FormContainer";
import RequiredErrorMessage from "@/components/common/RequiredErrorMessage";
import SocialButtons from "@/components/common/socialButtons/SocialButtons";
import Slug, { SIGN_IN_PATH } from "@/helpers/slug";
import { debounce } from "@/utils";
import { Checkbox, Divider, Form } from "antd";
import Link from "next/link";
import React from "react";

function SignUpForm() {
    const handleFormSubmit = (values) => {
        console.log("values", values);
    };

    // submit this form with debounce.
    const debounceOnFinish = debounce(handleFormSubmit, 200);

    return (
        <FormCardContainer cardTitle="Sign up">
            <p className="text-[40px] font-bold text-magenta-600 text-center">
                Palooi
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
                        label="Full name"
                        name="name"
                        isRequired={true}
                        errorMessage="Please input your full name!"
                    />
                    <CustomForm.NumberInputField
                        label="Phone Number"
                        name="number"
                        isRequired={true}
                        errorMessage="Please input your phone number!"
                    />
                    <CustomForm.PasswordInputField
                        label="Password"
                        name="password"
                        isRequired={true}
                        errorMessage="Please input your password!"
                    />
                    <CustomForm.PasswordInputField
                        label="Password"
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
                                className="text-magenta-600 font-medium font-poppins hover:text-magenta-600"
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
                    className="text-magenta-500 font-semibold"
                    href={SIGN_IN_PATH}
                >
                    Sign in
                </Link>
            </p>
        </FormCardContainer>
    );
}

export default SignUpForm;
