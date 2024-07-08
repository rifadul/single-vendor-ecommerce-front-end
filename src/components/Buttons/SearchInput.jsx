import { Input } from "antd";
import Image from "next/image";
import React from "react";
import Icons from "../../../public/assets/Icons";

const SearchBtn = ({ label, className, handleSearchClick, ...rest }) => {
    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            if (handleSearchClick) {
                handleSearchClick();
            }
        }
    };

    return (
        <Input
            className={`${className} custom-search`}
            style={{
                borderRadius: "2px",
                background: "#fafbfb",
                border: "1px solid #F5F6F7",
            }}
            {...rest}
            suffix={
                <Image
                    onClick={() =>
                        handleSearchClick ? handleSearchClick() : null
                    }
                    src={Icons.search_gray}
                    alt="search"
                    width={18}
                    height={18}
                    className="my-[10px] mx-[15px] cursor-pointer"
                />
            }
            onPressEnter={handleEnterPress}
        />
    );
};

export default SearchBtn;
