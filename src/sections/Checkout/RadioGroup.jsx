import React from "react";

const RadioGroup = ({ items, selectedItem, handleChange, title }) => {
    return (
        <div className="bg-white rounded shadow-md mb-6">
            <p className="text-base font-medium font-poppins bg-neutral-30 py-4 px-2">
                {title}
            </p>
            <div className="px-4 py-6">
                {items.map((item, key) => (
                    <label
                        htmlFor={item?.id}
                        className="flex items-center py-3 gap-2 cursor-pointer"
                        key={key}
                    >
                        <input
                            type="radio"
                            id={item?.id}
                            checked={selectedItem === item?.id}
                            className="text-magenta-500 accent-magenta-600"
                            onChange={handleChange}
                        />
                        <div>
                            <p className="text-neutral-600">
                                {item?.name}{" "}
                                {item?.description && (
                                    <span className="text-neutral-100">
                                        ({item.description})
                                    </span>
                                )}
                            </p>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;
