import Banner from "@/sections/Banner/Banner";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Banner />
    </Suspense>
  );
}
