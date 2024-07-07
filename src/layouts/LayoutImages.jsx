import React from "react";
import Image from "next/image";
import Images from "../../public/assets/images";

const LayoutImages = () => {
    return (
        <div className="hidden lg:block">
            <Image
                src={Images.bird_right}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[70px] h-[46px] absolute top-[10%] -left-3 z-10"
            />
            <Image
                src={Images.kite_left}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[140px] h-[230px] absolute top-[8%] -right-0 z-10"
            />
            <Image
                src={Images.ver_draw}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[250px] h-[200px] absolute top-[25%] -left-16 z-10 rotate-45"
            />

            <Image
                src={Images.kite_right}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[120px] h-[228px] absolute top-[50%] -left-8 z-10 "
            />
            <Image
                src={Images.dram_light}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[140px] h-[230px] absolute top-[25%] right-0 z-10"
            />
            <Image
                src={Images.dram}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[120px] h-[157px] absolute top-[45%] -right-0 z-10 "
            />
            <Image
                src={Images.craw}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[80px] h-[70px] absolute bottom-[540px] left-20 z-10 "
            />
            <Image
                src={Images.reel}
                alt="layout_image"
                width={1000}
                height={1000}
                className="w-[120px] h-[90px] absolute bottom-[580px] right-3 z-10 "
            />
        </div>
    );
};

export default LayoutImages;
