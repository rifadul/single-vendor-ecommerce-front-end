// v-3
import React from "react";
import { Radio, Checkbox, Slider, InputNumber } from "antd";

const FilterOption = (
    filter,
    priceRange,
    handlePriceChange,
    handleMinPriceChange,
    handleMaxPriceChange
) => {
    switch (filter.type) {
        case "radio":
            return (
                <Radio.Group
                    className="flex flex-col"
                    onChange={(e) => filter.onChange(e.target.value)}
                >
                    {filter.options.map((option) => (
                        <Radio
                            key={option.value}
                            value={option.value}
                            className="font-poppins custom-radio-style filter-option-style"
                        >
                            {option.label}
                        </Radio>
                    ))}
                </Radio.Group>
            );
        case "checkbox":
            return (
                <Checkbox.Group
                    className="flex flex-col"
                    onChange={filter.onChange}
                >
                    {filter.options.map((option) => (
                        <Checkbox
                            key={option.value}
                            value={option.value}
                            className="font-poppins filter-option-style"
                        >
                            {option.label}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
            );
        case "range":
            return (
                <>
                    <Slider
                        range
                        value={priceRange}
                        onChange={handlePriceChange}
                        // onChange={filter.onChange}
                    />
                    <div className="flex justify-between items-center mt-4">
                        <InputNumber
                            controls={false}
                            prefix={
                                <span className="text-neutral-700 text-sm font-medium">
                                    $
                                </span>
                            }
                            min={0}
                            value={priceRange[0]}
                            onChange={handleMinPriceChange}
                            placeholder="Min Price"
                            className="font-poppins filter-option-style"
                        />
                        <InputNumber
                            controls={false}
                            prefix={
                                <span className="text-neutral-700 text-sm font-medium">
                                    $
                                </span>
                            }
                            min={0}
                            onChange={handleMaxPriceChange}
                            value={priceRange[1]}
                            placeholder="Max Price"
                            className="font-poppins filter-option-style"
                        />
                    </div>
                </>
            );
        default:
            return null;
    }
};

// v-2
// const FilterOption = ({ type, options, title, handler }) => {
//     if (type === "radio") {
//         return (
//             <Radio.Group
//                 className="flex flex-col"
//                 onChange={(e) => handler(e.target.value)}
//             >
//                 {options.map((option) => (
//                     <Radio
//                         key={option.value}
//                         value={option.value}
//                         className="font-poppins custom-radio-style filter-option-style"
//                     >
//                         {option.label}
//                     </Radio>
//                 ))}
//             </Radio.Group>
//         );
//     }

//     if (type === "checkbox") {
//         return (
//             <Checkbox.Group className="flex flex-col" onChange={handler}>
//                 {options.map((option) => (
//                     <Checkbox
//                         key={option.value}
//                         value={option.value}
//                         className="font-poppins filter-option-style"
//                     >
//                         {option.label}
//                     </Checkbox>
//                 ))}
//             </Checkbox.Group>
//         );
//     }

//     if (type === "price") {
//         return (
//             <>
//                 <Slider range defaultValue={[20, 50]} onChange={handler} />
//                 <div className="flex justify-between items-center mt-4">
//                     <InputNumber
//                         controls={false}
//                         prefix={
//                             <span className="text-neutral-700 text-sm font-medium">
//                                 $
//                             </span>
//                         }
//                         min={0}
//                         placeholder="Min Price"
//                         className="font-poppins filter-option-style"
//                         onChange={(value) => handler([value, null])}
//                     />
//                     <InputNumber
//                         controls={false}
//                         prefix={
//                             <span className="text-neutral-700 text-sm font-medium">
//                                 $
//                             </span>
//                         }
//                         min={0}
//                         placeholder="Max Price"
//                         className="font-poppins filter-option-style"
//                         onChange={(value) => handler([null, value])}
//                     />
//                 </div>
//             </>
//         );
//     }

//     return null;
// };

export default FilterOption;

// v-1
// import React from "react";
// import { Radio, Checkbox, Slider, InputNumber } from "antd";

// const FilterOption = ({ type, options, title }) => {
//     if (type === "radio") {
//         return (
//             <Radio.Group className="flex flex-col">
//                 {options.map((option) => (
//                     <Radio
//                         key={option.value}
//                         value={option.value}
//                         className="font-poppins custom-radio-style filter-option-style"
//                     >
//                         {option.label}
//                     </Radio>
//                 ))}
//             </Radio.Group>
//         );
//     }

//     if (type === "checkbox") {
//         return (
//             <Checkbox.Group className="flex flex-col">
//                 {options.map((option) => (
//                     <Checkbox
//                         key={option.value}
//                         value={option.value}
//                         className="font-poppins filter-option-style"
//                     >
//                         {option.label}
//                     </Checkbox>
//                 ))}
//             </Checkbox.Group>
//         );
//     }

//     if (type === "price") {
//         return (
//             <>
//                 <Slider range defaultValue={[20, 50]} />
//                 <div className="flex justify-between items-center mt-4">
//                     <InputNumber
//                         controls={false}
//                         prefix={
//                             <span className="text-neutral-700 text-sm font-medium">
//                                 $
//                             </span>
//                         }
//                         min={0}
//                         placeholder="Min Price"
//                         className="font-poppins filter-option-style"
//                     />
//                     <InputNumber
//                         controls={false}
//                         prefix={
//                             <span className="text-neutral-700 text-sm font-medium">
//                                 $
//                             </span>
//                         }
//                         min={0}
//                         placeholder="Max Price"
//                         className="font-poppins filter-option-style"
//                     />
//                 </div>
//             </>
//         );
//     }

//     return null;
// };

// export default FilterOption;
