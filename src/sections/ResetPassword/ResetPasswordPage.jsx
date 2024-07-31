"use client";
import CustomForm from "@/components/Forms";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import FormContainer from "@/components/Forms/FormContainer";
import { useAuth } from "@/contexts/AuthContext";
import React from "react";

function ResetPasswordPage() {
    const { resetPassword } = useAuth();
    return (
        <FormCardContainer cardTitle="Change Password">
            <div className="">
                <FormContainer
                    onFinish={resetPassword}
                    buttonName="Reset Password"
                >
                    <CustomForm.EmailInputField
                        label="Email"
                        name="email"
                        isRequired={true}
                        errorMessage="Please input your email!"
                    />
                    <CustomForm.NumberInputField
                        label={"OTP"}
                        name="otp"
                        min={6}
                        placeholder={123456}
                        isRequired={true}
                        errorMessage="Enter OTP"
                    />
                    <CustomForm.PasswordInputField
                        label="New Password"
                        name="new_password"
                        isRequired={true}
                        errorMessage="Please input your password!"
                    />
                    <CustomForm.PasswordInputField
                        label="Confirm New Password"
                        name="new_password1"
                        isRequired={true}
                        errorMessage="Please input your password again!"
                        dependenciesFieldName={"new_password"}
                    />
                </FormContainer>
            </div>
        </FormCardContainer>
    );
}

export default ResetPasswordPage;
