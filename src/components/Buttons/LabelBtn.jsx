
const LabelBtn = ({
    variant = "primary" || "white",
    paddingY,
    paddingX,
    fontSize,
    label,
    width,
    className,
    ...rest
}) => {
    const btnVariant = {
        primary: `${paddingY ? paddingY : "md:py-3 py-2"} ${
            paddingX ? paddingX : "md:px-9 px-6"
        }  bg-blue-900 rounded-sm text-white ${
            fontSize ? fontSize : "md:text-base text-sm"
        }  font-semibold`,
        white: `${paddingY ? paddingY : " py-3.5"} ${
            paddingX ? paddingX : "px-5"
        } bg-white text-blue-900  ${
            fontSize ? fontSize : "text-sm font-medium"
        }  rounded-r whitespace-nowrap`,
    };

    return (
        <button
            {...rest}
            className={`${className} ${btnVariant[variant]} ${width && width}`}
        >
            {label}
        </button>
    );
};

export default LabelBtn;
