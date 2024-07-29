import { useState, useRef } from "react";
import { Carousel, Image } from "antd";

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleSelectThumbnail = (index) => {
        setCurrentIndex(index);
        if (carouselRef.current) {
            carouselRef.current.goTo(index);
        }
    };

    return (
        <div className="image-carousel">
            <Image.PreviewGroup>
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
                <div className="thumbnail-wrapper grid grid-cols-5 justify-start mt-4 overflow-x-auto scrollbar-hide">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`thumbnail border ${
                                currentIndex === index
                                    ? "border-pink-500"
                                    : "border-gray-200"
                            } cursor-pointer mx-2`}
                            onClick={() => handleSelectThumbnail(index)}
                        >
                            <Image
                                src={img.image}
                                alt={`Thumbnail ${index}`}
                                className="w-16 h-16 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </Image.PreviewGroup>
        </div>
    );
};

export default ImageCarousel;
