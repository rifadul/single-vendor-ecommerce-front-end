import NextBreadcrumb from "@/components/Breadcrumb/NextBreadcrumb";
import Footer from "@/components/Footer";
import TopNavSection from "@/components/Navbar/TopNavSection";
import { Suspense } from "react";
import MetaLayout from "./MetaLayout";

function Primary({ children }) {
    return (
		<Suspense fallback={<p>Loading...</p>}>
			<MetaLayout>
				<div className='relative bg-blue-100'>
					{/* <LayoutImages /> */}
					<TopNavSection />

					<div className='relative z-20'>
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
