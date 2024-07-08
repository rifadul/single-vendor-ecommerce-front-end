import { Suspense } from "react";
import SignInForm from "@/sections/SignIn/SignInForm";
import FormCardLoader from "@/components/common/Loader/FormCardLoader";

function SignIn() {
    return (
        <Suspense fallback={<FormCardLoader />}>
            <SignInForm />
        </Suspense>
    );
}

export default SignIn;
