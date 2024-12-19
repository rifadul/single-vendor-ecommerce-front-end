const PrimaryOutlinedBtn = ({
    active,
    label,
    paddingX,
    paddingY,
    activeBorderColor,
    deactivateBorderColor: deactivateBorderColor,
    width,
    border,
    color,
    activeTextColor,
    deactivateTextColor: deactivateTextColor,
    className,
    ...rest
}) => {
    return (
        <button
            className={`${className} ${width && width} ${
                paddingX ? paddingX : "px-6"
            } ${paddingY ? paddingY : "py-[7.5px]"}  ${
                border ? border : "border-[1.5px]"
            } ${
                active
                    ? `${
                          activeBorderColor
                              ? activeBorderColor
                              : "border-blue-700"
                      } ${
                          activeTextColor ? activeTextColor : "text-blue-700"
                      }`
                    : `${
                          deactivateBorderColor
                              ? deactivateBorderColor
                              : "border-neutral-30"
                      } ${
                          deactivateTextColor
                              ? deactivateTextColor
                              : "text-neutral-300"
                      }`
            }  rounded-sm`}
            {...rest}
        >
            {label}
        </button>
    );
};

export default PrimaryOutlinedBtn;
