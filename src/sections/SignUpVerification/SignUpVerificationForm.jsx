"use client";
import VerificationForm from "@/components/verificationForm/VerificationForm";

function SignUpVerificationForm() {
    const handleOnResend = () => {
        console.log("resend otp");
    };

    const handleOnSubmit = (otp) => {
        console.log("OTP is: ", otp);
    };

    return (
        <VerificationForm
            headingText="Verify your phone number"
            subHeadingText="We just sent a verification code to +880178******9"
            handleOnSubmit={handleOnSubmit}
            handleOnResend={handleOnResend}
        />
    );
}

export default SignUpVerificationForm;
