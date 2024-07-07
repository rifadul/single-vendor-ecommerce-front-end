import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="container mx-auto  px-5 py-5 sm:py-12">
        Welcome to Palooi
      </div>
    </Suspense>
  );
}
