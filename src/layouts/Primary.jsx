import Footer from "@/components/Footer";
import LayoutImages from "./LayoutImages";
import NextBreadcrumb from "@/components/Breadcrumb/NextBreadcrumb";
import { Suspense } from "react";
import MetaLayout from "./MetaLayout";
import TopNavSection from "@/components/Navbar/TopNavSection";

function Primary({ children }) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <MetaLayout>
                <div className="relative bg-pink-100">
                    <LayoutImages />
                    <TopNavSection />

                    <div className="relative z-20">
                        <NextBreadcrumb />
                        {children}
                    </div>

                    <Footer.FooterTop />
                    <Footer.Primary />
                </div>
            </MetaLayout>
        </Suspense>
    );
}

export default Primary;
