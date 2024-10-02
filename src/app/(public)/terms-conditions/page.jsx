import { TERMS_AND_CONDITIONS_API_URL } from "@/helpers/apiUrls";
import React, { Suspense } from "react";

async function getTermsAndConditionsContent() {
    const res = await fetch(TERMS_AND_CONDITIONS_API_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

async function TermsAndConditionsPage() {
    const [pageContent] = await Promise.all([getTermsAndConditionsContent()]);
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div
                className="container mx-auto p-4"
                dangerouslySetInnerHTML={{ __html: pageContent.content }}
            />
        </Suspense>
    );
}

export default TermsAndConditionsPage;
