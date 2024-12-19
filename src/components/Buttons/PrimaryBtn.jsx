
const PrimaryBtn = ({ label, className, ...rest }) => {
    return (
        <button
            className={`bg-blue-600 py-3 px-9 text-white font-semibold text-base rounded-lg w-full hover:bg-blue-800 transition duration-300 ${className}`}
            {...rest}
        >
            {label}
        </button>
    );
};

export default PrimaryBtn;
