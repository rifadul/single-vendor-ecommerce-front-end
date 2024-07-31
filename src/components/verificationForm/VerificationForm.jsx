"use client";
import FormCardContainer from "@/components/Forms/FormCardContainer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Images from "../../../public/assets/images";
import CustomForm from "@/components/Forms";
import Buttons from "@/components/Buttons";

const otpInputFieldLength = 6;
const otpTime = 30;

function VerificationForm({
    headingText,
    subHeadingText,
    handleOnSubmit,
    handleOnResend,
}) {
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(otpTime);
    const [showResend, setShowResend] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setShowResend(true);
        }
    }, [timer]);

    const handleResend = () => {
        setTimer(otpTime);
        setShowResend(false);
        // Call resend function here
        handleOnResend && handleOnResend();
    };

    return (
        <FormCardContainer cardTitle="OTP Verification">
            <Image src={Images.verify_otp_image} alt="verification image" />
            <div className="flex flex-col gap-9">
                <div className="space-y-3">
                    <p className="text-black-1000 font-semibold text-xl">
                        {headingText}
                    </p>
                    <p className="text-neutral-300 text-sm">{subHeadingText}</p>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-neutral-300 font-medium">
                            Verification Code
                        </p>
                        <div className="text-neutral-500 font-semibold">
                            {showResend ? (
                                <p
                                    className="cursor-pointer"
                                    onClick={handleResend}
                                >
                                    Re-send Code
                                </p>
                            ) : (
                                <span>{`${Math.floor(timer / 60)}:${
                                    timer % 60 < 10 ? "0" : ""
                                }${timer % 60}`}</span>
                            )}
                        </div>
                    </div>
                    <CustomForm.OtpInputField
                        length={otpInputFieldLength}
                        size="large"
                        onChange={(value) => setOtp(value)}
                    />
                </div>

                <Buttons.PrimaryBtn
                    label="Verify OTP"
                    disabled={otp.length !== otpInputFieldLength ? true : false}
                    className={`${
                        otp.length !== otpInputFieldLength &&
                        "bg-neutral-50 hover:bg-neutral-50"
                    }`}
                    onClick={() => handleOnSubmit(otp)}
                />
            </div>
        </FormCardContainer>
    );
}

export default VerificationForm;
