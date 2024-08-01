"use client";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import Image from "next/image";
import React from "react";
import Images from "../../../public/assets/images";
import FormContainer from "@/components/Forms/FormContainer";
import CustomForm from "@/components/Forms";
import { useAuth } from "@/contexts/AuthContext";

function ForgetPasswordPage() {
    const { forgetPassword } = useAuth();

    return (
        <FormCardContainer cardTitle="Forget Password">
            <p className="text-[40px] font-bold text-magenta-600 text-center">
                Palooi
            </p>
            <Image src={Images.signInBanner} alt="Sign in banner" />
            <div className="space-y-9">
                <div className="space-y-3">
                    <p className="text-black-1000 font-semibold text-xl">
                        Verify Your Email
                    </p>
                    <p className="text-neutral-300 text-sm">
                        Enter your email for verify!
                    </p>
                </div>

                <FormContainer
                    onFinish={forgetPassword}
                    buttonName="Verify email"
                >
                    <CustomForm.EmailInputField
                        label="Email"
                        name="email"
                        isRequired={true}
                        errorMessage="Please input your email!"
                    />
                </FormContainer>
            </div>
        </FormCardContainer>
    );
}

export default ForgetPasswordPage;
