import Loader from "@/components/common/Loader/Loader";
import { BANNER_API_URL } from "@/helpers/apiUrls";
import HomePage from "@/sections/Home/HomePage";
import MakeApiCall from "@/services/MakeApiCall";
import { Suspense } from "react";

async function getBanners() {
    const res = await MakeApiCall({
        apiUrl: BANNER_API_URL,
    });
    return res;
}

async function Home() {
    const bannerData = await getBanners();

    // Wait for the promises to resolve
    const [banners] = await Promise.all([bannerData]);
    return (
        <Suspense fallback={<Loader />}>
            <HomePage banners={banners} />
        </Suspense>
    );
}

export default Home;
