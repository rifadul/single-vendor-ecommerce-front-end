"use client";
import CustomForm from "@/components/Forms";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import FormContainer from "@/components/Forms/FormContainer";
import { useAuth } from "@/contexts/AuthContext";
import { Spin } from "antd";
import Image from "next/image";
import Images from "../../../public/assets/images";

function ForgetPasswordPage() {
    const { forgetPassword, loading } = useAuth();

    return (
        <FormCardContainer cardTitle="Forget Password">
            <Spin fullscreen spinning={loading} />
            <p className="text-[40px] font-bold text-blue-900 text-center">
                SHARK WAVE
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
