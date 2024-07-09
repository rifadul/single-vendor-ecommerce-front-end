// "use client";
// import React from "react";
// import { Collapse } from "antd";
// import Image from "next/image";
// import Icons from "../../../public/assets/Icons";
// import filterConfig from "./filterConfig";
// import FilterOption from "./FilterOption";

// const { Panel } = Collapse;

// // v-3

// const FilterSidebar = () => {
//     return (
//         <div className="bg-white w-full lg:w-1/5 h-screen overflow-y-auto scrollbar-hide">
//             <h2 className="text-xl font-semibold px-4 py-5 border-b border-borderColor">
//                 Filter
//             </h2>
//             <div className="py-3">
//                 <Collapse
//                     ghost
//                     defaultActiveKey={["1"]}
//                     bordered={false}
//                     className="filter-collapse font-poppins"
//                     expandIconPosition="end"
//                     expandIcon={({ isActive }) => (
//                         <Image
//                             src={Icons.right_arrow_gray}
//                             alt="right arrow"
//                             className={`w-6 h-6 duration-300 ${
//                                 isActive ? "rotate-90" : "rotate-0"
//                             }`}
//                         />
//                     )}
//                 >
//                     {filterConfig.map((filter, index) => (
//                         <Panel
//                             header={filter.title}
//                             key={index}
//                             className="filter-panel"
//                         >
//                             <FilterOption
//                                 type={filter.type}
//                                 options={filter.options}
//                                 handler={filter.handler}
//                             />
//                         </Panel>
//                     ))}
//                 </Collapse>
//             </div>
//         </div>
//     );
// };

// export default FilterSidebar;

// // v-2
// // const FilterSidebar = () => {
// //     return (
// //         <div className="bg-white w-full lg:w-1/4 overflow-y-auto scrollbar-hide">
// //             <h2 className="text-xl font-semibold px-4 py-5 border-b border-borderColor">
// //                 Filter
// //             </h2>
// //             <div className="py-3">
// //                 <Collapse
// //                     ghost
// //                     defaultActiveKey={["1"]}
// //                     bordered={false}
// //                     className="filter-collapse font-poppins"
// //                     expandIconPosition="end"
// //                     expandIcon={({ isActive }) => (
// //                         <Image
// //                             src={Icons.right_arrow_gray}
// //                             alt="right arrow"
// //                             className={`w-6 h-6 duration-300 ${
// //                                 isActive ? "rotate-90" : "rotate-0"
// //                             }`}
// //                         />
// //                     )}
// //                 >
// //                     {filterConfig.map((filter, index) => (
// //                         <Panel
// //                             header={filter.title}
// //                             key={index}
// //                             className="filter-panel"
// //                         >
// //                             <FilterOption
// //                                 type={filter.type}
// //                                 options={filter.options}
// //                             />
// //                         </Panel>
// //                     ))}
// //                 </Collapse>
// //             </div>
// //         </div>
// //     );
// // };

// // v-1

// // "use client";
// // import React from "react";
// // import { Collapse, Radio, Checkbox, Slider, InputNumber } from "antd";
// // import Image from "next/image";
// // import Icons from "../../../public/assets/Icons";
// // import filterConfig from "./filterConfig";

// // const { Panel } = Collapse;

// // const FilterSidebar = () => {
// //     return (
// //         <div className="bg-white w-full lg:w-1/4 overflow-y-auto scrollbar-hide">
// //             <h2 className="text-xl font-semibold px-4 py-5 border-b border-borderColor">
// //                 Filter
// //             </h2>
// //             <div className="py-3">
// //                 <Collapse
// //                     ghost
// //                     defaultActiveKey={["1"]}
// //                     bordered={false}
// //                     className="filter-collapse font-poppins"
// //                     expandIconPosition="end"
// //                     expandIcon={({ isActive }) => (
// //                         <Image
// //                             src={Icons.right_arrow_gray}
// //                             alt="right arrow"
// //                             className={`w-6 h-6 duration-300 ${
// //                                 isActive ? "rotate-90" : "rotate-0"
// //                             }`}
// //                         />
// //                     )}
// //                 >
// //                     {filterConfig.map((filter, index) => (
// //                         <Panel
// //                             header={filter.title}
// //                             key={index}
// //                             className="filter-panel"
// //                         >
// //                             {filter.type === "sort" && (
// //                                 <Radio.Group className="flex flex-col">
// //                                     {filter.options.map((option) => (
// //                                         <Radio
// //                                             key={option.value}
// //                                             value={option.value}
// //                                             className="font-poppins custom-radio-style filter-option-style"
// //                                         >
// //                                             {option.label}
// //                                         </Radio>
// //                                     ))}
// //                                 </Radio.Group>
// //                             )}
// //                             {filter.type === "availability" && (
// //                                 <Checkbox.Group className="flex flex-col">
// //                                     {filter.options.map((option) => (
// //                                         <Checkbox
// //                                             key={option.value}
// //                                             value={option.value}
// //                                             className="font-poppins filter-option-style"
// //                                         >
// //                                             {option.label}
// //                                         </Checkbox>
// //                                     ))}
// //                                 </Checkbox.Group>
// //                             )}
// //                             {filter.type === "price" && (
// //                                 <>
// //                                     <Slider range defaultValue={[20, 50]} />
// //                                     <div className="flex justify-between items-center mt-4">
// //                                         <InputNumber
// //                                             controls={false}
// //                                             prefix={
// //                                                 <span className="text-neutral-700 text-sm font-medium">
// //                                                     $
// //                                                 </span>
// //                                             }
// //                                             min={0}
// //                                             placeholder="Min Price"
// //                                             className="font-poppins filter-option-style"
// //                                         />
// //                                         <InputNumber
// //                                             controls={false}
// //                                             prefix={
// //                                                 <span className="text-neutral-700 text-sm font-medium">
// //                                                     $
// //                                                 </span>
// //                                             }
// //                                             min={0}
// //                                             placeholder="Max Price"
// //                                             className="font-poppins filter-option-style"
// //                                         />
// //                                     </div>
// //                                 </>
// //                             )}
// //                             {filter.type === "color" && (
// //                                 <Checkbox.Group className="flex flex-col">
// //                                     {filter.options.map((option) => (
// //                                         <Checkbox
// //                                             key={option.value}
// //                                             value={option.value}
// //                                             className="font-poppins filter-option-style"
// //                                         >
// //                                             {option.label}
// //                                         </Checkbox>
// //                                     ))}
// //                                 </Checkbox.Group>
// //                             )}
// //                         </Panel>
// //                     ))}
// //                 </Collapse>
// //             </div>
// //         </div>
// //     );
// // };

// // export default FilterSidebar;

// // v-0
// // "use client";
// // import React from "react";
// // import { Collapse, Radio, Checkbox, Slider, InputNumber } from "antd";
// // import Image from "next/image";
// // import Icons from "../../../public/assets/Icons";

// // const { Panel } = Collapse;

// // const FilterSidebar = () => {
// //     return (
// //         <div className="bg-white w-full lg:w-1/4 overflow-y-auto scrollbar-hide">
// //             <h2 className="text-xl font-semibold px-4 py-5 border-b border-borderColor">
// //                 Filter
// //             </h2>
// //             <div className="py-3">
// //                 <Collapse
// //                     ghost
// //                     defaultActiveKey={["1"]}
// //                     bordered={false}
// //                     className="filter-collapse font-poppins"
// //                     expandIconPosition="end"
// //                     expandIcon={({ isActive }) => (
// //                         <Image
// //                             src={Icons.right_arrow_gray}
// //                             alt="right arrow"
// //                             className={`w-6 h-6 duration-300 ${
// //                                 isActive ? "rotate-90" : "rotate-0"
// //                             }`}
// //                         />
// //                     )}
// //                 >
// //                     {/* Sort By Filter */}
// //                     <Panel header="Sort By" key="1" className="filter-panel">
// //                         <Radio.Group className="flex flex-col">
// //                             <Radio
// //                                 value="price"
// //                                 className="font-poppins custom-radio-style filter-option-style"
// //                             >
// //                                 Price
// //                             </Radio>
// //                             <Radio
// //                                 value="popularity"
// //                                 className="font-poppins custom-radio-style filter-option-style"
// //                             >
// //                                 Popularity
// //                             </Radio>
// //                             <Radio
// //                                 value="rating"
// //                                 className="font-poppins custom-radio-style filter-option-style"
// //                             >
// //                                 Rating
// //                             </Radio>
// //                         </Radio.Group>
// //                     </Panel>

// //                     {/* Availability Filter */}
// //                     <Panel
// //                         header="Availability"
// //                         key="2"
// //                         className="filter-panel"
// //                     >
// //                         <Checkbox.Group className="flex flex-col">
// //                             <Checkbox
// //                                 value="inStock"
// //                                 className="font-poppins filter-option-style"
// //                             >
// //                                 In Stock
// //                             </Checkbox>
// //                             <Checkbox
// //                                 value="outOfStock"
// //                                 className="font-poppins filter-option-style"
// //                             >
// //                                 Out of Stock
// //                             </Checkbox>
// //                         </Checkbox.Group>
// //                     </Panel>

// //                     {/* Price Filter */}
// //                     <Panel header="Price" key="3" className="filter-panel">
// //                         <Slider range defaultValue={[20, 50]} />
// //                         <div className="flex justify-between items-center mt-4">
// //                             <InputNumber
// //                                 controls={false}
// //                                 prefix={
// //                                     <span className="text-neutral-700 text-sm font-medium">
// //                                         $
// //                                     </span>
// //                                 }
// //                                 min={0}
// //                                 placeholder="Min Price"
// //                                 className="font-poppins filter-option-style"
// //                             />
// //                             {/* <span className="mx-2">-</span> */}
// //                             <InputNumber
// //                                 controls={false}
// //                                 prefix={
// //                                     <span className="text-neutral-700 text-sm font-medium">
// //                                         $
// //                                     </span>
// //                                 }
// //                                 min={0}
// //                                 placeholder="Max Price"
// //                                 className="font-poppins filter-option-style"
// //                             />
// //                         </div>
// //                     </Panel>

// //                     {/* Color Filter */}
// //                     <Panel header="Color" key="4" className="filter-panel">
// //                         <Checkbox.Group className="flex flex-col">
// //                             {Array.from({ length: 35 }).map((_, index) => (
// //                                 <Checkbox
// //                                     value={`Value${index}`}
// //                                     key={index}
// //                                     className="font-poppins filter-option-style"
// //                                 >
// //                                     Red
// //                                 </Checkbox>
// //                             ))}
// //                         </Checkbox.Group>
// //                     </Panel>
// //                 </Collapse>
// //             </div>
// //         </div>
// //     );
// // };

// // export default FilterSidebar;

"use client";
import React, { useState } from "react";
import { Collapse, Radio, Checkbox, Slider, InputNumber } from "antd";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import filterConfig from "./filterConfig";
import FilterOption from "./FilterOption";

const FilterSidebar = () => {
    const [priceRange, setPriceRange] = useState([20, 50]);

    const handlePriceChange = (value) => {
        // setPriceRange(value);
        console.log("Price change");
    };

    const handleMinPriceChange = (value) => {
        // setPriceRange([value, priceRange[1]]);
        console.log("min Price change");
    };

    const handleMaxPriceChange = (value) => {
        // setPriceRange([priceRange[0], value]);
        console.log("Max Price change");
    };

    const filterItems = filterConfig.map((filter) => ({
        key: filter.key,
        label: filter.label,
        children: FilterOption(
            filter,
            priceRange,
            handleMaxPriceChange,
            handleMinPriceChange,
            handlePriceChange
        ),
    }));

    return (
        <div className="bg-white overflow-y-auto scrollbar-hide lg:w-1/4">
            <h2 className="text-xl font-semibold px-4 py-5 border-b border-borderColor hidden lg:block">
                Filter
            </h2>
            <div className="py-3">
                <Collapse
                    ghost
                    defaultActiveKey={["1"]}
                    items={filterItems}
                    bordered={false}
                    className="filter-collapse font-poppins"
                    expandIconPosition="end"
                    expandIcon={({ isActive }) => (
                        <Image
                            src={Icons.right_arrow_gray}
                            alt="right arrow"
                            className={`w-6 h-6 duration-300 ${
                                isActive ? "rotate-90" : "rotate-0"
                            }`}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
