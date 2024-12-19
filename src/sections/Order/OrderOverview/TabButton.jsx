
function TabButton({ isActive, onClick, label }) {
    return (
        <button
            onClick={onClick}
            className={`w-1/2 py-3 text-center font-semibold border-b-2 ${
                isActive
                    ? "border-blue-900 text-blue-900"
                    : "border-neutral-300 text-neutral-600"
            }`}
        >
            {label}
        </button>
    );
}

export default TabButton;
