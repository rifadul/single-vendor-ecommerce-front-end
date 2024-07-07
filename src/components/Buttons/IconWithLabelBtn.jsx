import Image from "next/image";
import React from "react";

const IconWithLabelBtn = ({
    icon,
    alt,
    width,
    height,
    label,
    className = "text-neutral-700",
    ...rest
}) => {
    return (
        <button className={className} {...rest}>
            <div className="flex justify-center items-center gap-x-2.5">
                <Image
                    src={icon}
                    alt={alt}
                    width={24}
                    height={24}
                    className={`${width} ${height}`}
                />

                <p className="text-sm font-medium">{label}</p>
            </div>
        </button>
    );
};

export default IconWithLabelBtn;
