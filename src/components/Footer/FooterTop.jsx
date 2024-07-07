import React from "react";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";

const FooterTop = () => {
    const footerData = [
        {
            title: "FREE & FASTEST",
            subTitle: "Shipping from all over the world",
            icon: Icons.truck,
        },
        {
            title: "FREE RETURNS",
            subTitle: "Return money within 30 days",
            icon: Icons.return_currency,
        },
        {
            title: "SECURE SHOPPING",
            subTitle: "You’re in safe hands",
            icon: Icons.lock,
        },
        {
            title: "OVER 70,000",
            subTitle: "Unique products",
            icon: Icons.unique_product,
        },
    ];
    return (
        <div className="hidden sm:block mt-6 lg:mt-16 py-6 bg-white">
            <div className="flex justify-between items-center flex-1 flex-wrap gap-6 container mx-auto">
                {footerData.map((data, index) => (
                    <React.Fragment key={index}>
                        <FooterSections data={data} />
                        {index !== footerData.length - 1 && (
                            <div className="h-12 border-r border-primary-gray border-opacity-25 xl:block hidden" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default FooterTop;

const FooterSections = ({ data }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center  sm:justify-start gap-6  w-full sm:w-[286px] lg:w-[350px] xl:w-auto">
            <Image
                src={data.icon}
                alt="palooi-footer-image"
                width={100}
                height={100}
                className="h-10 w-12"
            />
            <div className="flex flex-col  items-center  sm:items-start">
                <h4 className="text-base font-bold text-primary-black-88">
                    {data.title}
                </h4>
                <p className="text-sm text-primary-gray">{data.subTitle}</p>
            </div>
        </div>
    );
};
