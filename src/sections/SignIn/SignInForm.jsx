"use client";
import CustomForm from "@/components/Forms";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import FormContainer from "@/components/Forms/FormContainer";
import Image from "next/image";
import Link from "next/link";
import Images from "../../../public/assets/images";
import SocialButtons from "@/components/common/socialButtons/SocialButtons";
import { debounce } from "@/utils";
import Slug, { SIGN_UP_PATH } from "@/helpers/slug";
import { Checkbox, Form } from "antd";

function SignInForm() {
    const handleFormSubmit = (values) => {
        console.log("values", values);
    };

    // submit this form with debounce.
    const debounceOnFinish = debounce(handleFormSubmit, 200);

    return (
        <FormCardContainer cardTitle="Sign in">
            <p className="text-[40px] font-bold text-magenta-600 text-center">
                Palooi
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
                            href="#"
                            className="text-magenta-600 font-medium hover:text-magenta-600"
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
                    className="text-magenta-500 font-semibold"
                    href={SIGN_UP_PATH}
                >
                    Sign up
                </Link>
            </p>
        </FormCardContainer>
    );
}

export default SignInForm;
