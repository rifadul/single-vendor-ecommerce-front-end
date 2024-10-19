"use client";
import VerificationForm from "@/components/verificationForm/VerificationForm";
import { useAuth } from "@/contexts/AuthContext";
import { RESEND_OTP_API_URL, VERIFY_OTP_API_URL } from "@/helpers/apiUrls";
import { MY_ACCOUNT_PATH } from "@/helpers/slug";
import { maskString } from "@/utils";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function OtpVerificationForm() {
    const { getProfile } = useAuth();
    const router = useRouter();
    const token = getCookie("access_token");
    const otp_type = getCookie("otp_type");
    const otp_send_to = getCookie("otp_send_to");

    const handleOnResend = async () => {
        if (!token) return;

        try {
            const response = await fetch(RESEND_OTP_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    otp_type: otp_type,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                toast.success(data?.status);
            } else {
                throw new Error(data.error || "Failed to update");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleOnSubmit = async (otp) => {
        if (!token) return;

        try {
            const response = await fetch(VERIFY_OTP_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    otp_type: otp_type,
                    otp: otp,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                toast.success(data?.status);
                deleteCookie("otp_type");
                deleteCookie("otp_send_to");
                await getProfile();
                router.push(MY_ACCOUNT_PATH);
            } else {
                throw new Error(data.error || "Failed to update");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <VerificationForm
            headingText={`Verify your ${
                otp_type === "phone" ? "phone number" : "email"
            } `}
            subHeadingText={`We just sent a verification code to ${maskString(
                otp_send_to || ""
            )}`}
            handleOnSubmit={handleOnSubmit}
            handleOnResend={handleOnResend}
        />
    );
}

export default OtpVerificationForm;
