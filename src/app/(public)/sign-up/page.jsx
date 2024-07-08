import FormCardLoader from "@/components/common/Loader/FormCardLoader";
import SignUpForm from "@/sections/SignUp/SignUpForm";
import React, { Suspense } from "react";

function SignUp() {
    return (
        <Suspense fallback={<FormCardLoader />}>
            <SignUpForm />
        </Suspense>
    );
}

export default SignUp;
