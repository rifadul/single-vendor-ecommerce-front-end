const PrimaryOutlinedBtn = ({
  active,
  label,
  paddingX,
  paddingY,
  activeBorderColor,
  deactiveBorderColor,
  width,
  border,
  color,
  activeTextColor,
  deactiveTextColor,
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
          ? `${activeBorderColor ? activeBorderColor : "border-magenta-500"} ${
              activeTextColor ? activeTextColor : "text-magenta-500"
            }`
          : `${
              deactiveBorderColor ? deactiveBorderColor : "border-neutral-30"
            } ${deactiveTextColor ? deactiveTextColor : "text-neutral-300"}`
      }  rounded-sm`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default PrimaryOutlinedBtn;
