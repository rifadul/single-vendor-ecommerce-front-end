import Loader from "@/components/common/Loader/Loader";
import Banner from "@/sections/Banner/Banner";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Banner />
    </Suspense>
  );
}
