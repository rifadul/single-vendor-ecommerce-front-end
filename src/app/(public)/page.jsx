import Loader from "@/components/common/Loader/Loader";
import { BANNER_API_URL } from "@/helpers/apiUrls";
import HomePage from "@/sections/Home/HomePage";
import { Suspense } from "react";

// Define banner API call functions
async function getBanners() {
    const res = await fetch(BANNER_API_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch banners");
    }
    return res.json();
}

export default async function Home() {
    // Fetch banner data in parallel
    const [banners] = await Promise.all([getBanners()]);

    return (
        <Suspense fallback={<Loader />}>
            <HomePage banners={banners} />
        </Suspense>
    );
}
