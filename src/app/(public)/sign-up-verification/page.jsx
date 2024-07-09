import FormCardLoader from "@/components/common/Loader/FormCardLoader";
import SignUpVerificationForm from "@/sections/SignUpVerification/SignUpVerificationForm";
import React, { Suspense } from "react";

function SignUpVerification() {
    return (
        <Suspense fallback={<FormCardLoader />}>
            <SignUpVerificationForm />
        </Suspense>
    );
}

export default SignUpVerification;
