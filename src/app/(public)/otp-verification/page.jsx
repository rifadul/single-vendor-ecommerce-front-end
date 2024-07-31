import FormCardLoader from "@/components/common/Loader/FormCardLoader";
import OtpVerificationForm from "@/sections/OtpVerification/OtpVerificationForm";
import { Suspense } from "react";

function SignUpVerification() {
    return (
        <Suspense fallback={<FormCardLoader />}>
            <OtpVerificationForm />
        </Suspense>
    );
}

export default SignUpVerification;
