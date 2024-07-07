import "./globals.css";
import Providers from "@/contexts/Providers";
import { montserrat, poppins } from "@/utils/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import siteMetadata from "./siteMetaData";
import Layouts from "@/layouts";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
  category: "e-commerce",
  icons: { icon: "icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins} ${montserrat} font-poppins font-normal text-sm`}
      >
        <Providers>
          <ToastContainer autoClose={3000} />
          <Layouts.Primary>{children}</Layouts.Primary>
        </Providers>
        {/* <Providers>
          <ToastContainer autoClose={3000} />
          {children}
        </Providers> */}
      </body>
    </html>
  );
}
