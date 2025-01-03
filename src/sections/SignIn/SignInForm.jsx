"use client";
import SocialButtons from "@/components/common/socialButtons/SocialButtons";
import CustomForm from "@/components/Forms";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import FormContainer from "@/components/Forms/FormContainer";
import { useAuth } from "@/contexts/AuthContext";
import { FORGET_PASSWORD_PATH, SIGN_UP_PATH } from "@/helpers/slug";
import { debounce } from "@/utils";
import { Checkbox, Form, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Images from "../../../public/assets/images";

function SignInForm() {
    const { login, loading } = useAuth();
    const searchParams = useSearchParams();

    const handleFormSubmit = async (values) => {
        const redirectTo = searchParams.get("redirect") || "/";
        await login(values, redirectTo);
    };

    // submit this form with debounce.
    const debounceOnFinish = debounce(handleFormSubmit, 200);

    return (
        <FormCardContainer cardTitle="Sign in">
            <Spin fullscreen spinning={loading} />
            <p className="text-[40px] font-bold text-blue-900 text-center">
                SHARK WAVE
            </p>
            <Image src={Images.signInBanner} alt="Sign in banner" />
            <div className="space-y-9">
                <div className="space-y-3">
                    <p className="text-black-1000 font-semibold text-xl">
                        Sign in
                    </p>
                    <p className="text-neutral-300 text-sm">
                        Enter your phone number and password to sign in!
                    </p>
                </div>

                <FormContainer onFinish={debounceOnFinish} buttonName="Sign In">
                    <CustomForm.EmailInputField
                        label="Email"
                        name="email_or_phone"
                        isRequired={true}
                        errorMessage="Please input your email!"
                    />
                    <CustomForm.PasswordInputField
                        label="Password"
                        name="password"
                        isRequired={true}
                        errorMessage="Please input your password!"
                        min={6}
                    />

                    <div className="flex justify-between items-center mb-4">
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            className="flex items-center m-0 "
                        >
                            <Checkbox className="  text-neutral-300 text-sm font-semibold">
                                Keep me logged in
                            </Checkbox>
                        </Form.Item>
                        <Link
                            href={FORGET_PASSWORD_PATH}
                            className="text-blue-900 font-medium hover:text-blue-900"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <SocialButtons />
                </FormContainer>
            </div>

            <p className="font-medium text-neutral-300 text-center">
                Don't have an account ?{" "}
                <Link
                    className="text-blue-700 font-semibold"
                    href={SIGN_UP_PATH}
                >
                    Sign up
                </Link>
            </p>
        </FormCardContainer>
    );
}

export default SignInForm;
