import { useState, useRef, useEffect } from "react";
import { Carousel, Image } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const thumbnailsRef = useRef(null);

    const handleSelectThumbnail = (index) => {
        setCurrentIndex(index);
        if (carouselRef.current) {
            carouselRef.current.goTo(index);
        }
    };

    const scrollThumbnails = (direction) => {
        const scrollAmount = 100; // Adjust this value based on your needs
        if (thumbnailsRef.current) {
            thumbnailsRef.current.scrollLeft +=
                direction === "left" ? -scrollAmount : scrollAmount;
        }
    };

    return (
        <div className="image-carousel relative">
            <Carousel
                afterChange={(current) => setCurrentIndex(current)}
                dots={false}
                ref={carouselRef}
                className="w-full"
            >
                {images.map((img, index) => (
                    <div key={index} className="flex justify-center">
                        <Image
                            src={img.image}
                            alt={`Product ${index}`}
                            className="w-full h-96 object-contain cursor-pointer"
                        />
                    </div>
                ))}
            </Carousel>
            <div className=" mt-4">
                <div
                    className="thumbnail-wrapper flex overflow-x-auto scrollbar-hide"
                    ref={thumbnailsRef}
                    // style={{
                    //     scrollSnapType: "x mandatory",
                    //     gap: "16px",
                    //     width: "calc(100% - 64px)",
                    //     position: "",
                    //     margin: "0 auto",
                    // }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`thumbnail border ${
                                currentIndex === index
                                    ? "border-pink-500"
                                    : "border-gray-200"
                            } cursor-pointer`}
                            onClick={() => handleSelectThumbnail(index)}
                            style={{
                                scrollSnapAlign: "center",
                                minWidth: "100px",
                            }}
                        >
                            <img
                                src={img.image}
                                alt={`Thumbnail ${index}`}
                                className="w-16 h-16 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
