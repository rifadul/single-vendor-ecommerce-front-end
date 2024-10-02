import { PRIVACY_POLICY_API_URL } from "@/helpers/apiUrls";
import React, { Suspense } from "react";

async function getPrivacyPolicyContent() {
    const res = await fetch(PRIVACY_POLICY_API_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

async function PrivacyPolicyPage() {
    const [pageContent] = await Promise.all([getPrivacyPolicyContent()]);
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div
                className="container mx-auto p-4"
                dangerouslySetInnerHTML={{ __html: pageContent.content }}
            />
        </Suspense>
    );
}

export default PrivacyPolicyPage;
