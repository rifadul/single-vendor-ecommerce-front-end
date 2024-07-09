// v-4
const filterConfig = [
    {
        key: "1",
        label: "Sort By",
        type: "radio",
        options: [
            { value: "price", label: "Price" },
            { value: "popularity", label: "Popularity" },
            { value: "rating", label: "Rating" },
        ],
        onChange: (value) => {
            console.log("Sort By changed:", value);
        },
    },
    {
        key: "2",
        label: "Availability",
        type: "checkbox",
        options: [
            { value: "inStock", label: "In Stock" },
            { value: "outOfStock", label: "Out of Stock" },
        ],
        onChange: (checkedValues) => {
            console.log("Availability changed:", checkedValues);
        },
    },
    {
        key: "3",
        label: "Price",
        type: "range",
        onChange: (value) => {
            console.log("Price range changed:", value);
        },
    },
    {
        key: "4",
        label: "Color",
        type: "checkbox",
        options: Array.from({ length: 10 }, (_, index) => ({
            value: `color${index}`,
            label: `Color ${index + 1}`,
        })),
        onChange: (checkedValues) => {
            console.log("Color changed:", checkedValues);
        },
    },
];

export default filterConfig;

// v-3
// const filterConfig = [
//     {
//         key: "1",
//         label: "Sort By",
//         type: "radio",
//         options: [
//             { value: "price", label: "Price" },
//             { value: "popularity", label: "Popularity" },
//             { value: "rating", label: "Rating" },
//         ],
//     },
//     {
//         key: "2",
//         label: "Availability",
//         type: "checkbox",
//         options: [
//             { value: "inStock", label: "In Stock" },
//             { value: "outOfStock", label: "Out of Stock" },
//         ],
//     },
//     {
//         key: "3",
//         label: "Price",
//         type: "range",
//     },
//     {
//         key: "4",
//         label: "Color",
//         type: "checkbox",
//         options: Array.from({ length: 10 }, (_, index) => ({
//             value: `color${index}`,
//             label: `Color ${index + 1}`,
//         })),
//     },
//     {
//         key: "5",
//         label: "Brand",
//         type: "checkbox",
//         options: Array.from({ length: 10 }, (_, index) => ({
//             value: `Brand${index}`,
//             label: `Brand ${index + 1}`,
//         })),
//     },
// ];

// export default filterConfig;

// v-2
// const filterConfig = [
//     {
//         type: "radio",
//         title: "Sort By",
//         options: [
//             { value: "price", label: "Price" },
//             { value: "popularity", label: "Popularity" },
//             { value: "rating", label: "Rating" },
//         ],
//         handler: (value) => console.log("Sort By selected:", value),
//     },
//     {
//         type: "checkbox",
//         title: "Availability",
//         options: [
//             { value: "inStock", label: "In Stock" },
//             { value: "outOfStock", label: "Out of Stock" },
//         ],
//         handler: (checkedValues) =>
//             console.log("Availability selected:", checkedValues),
//     },
//     {
//         type: "price",
//         title: "Price",
//         handler: (value) => console.log("Price range selected:", value),
//     },
//     {
//         type: "checkbox",
//         title: "Color",
//         options: Array.from({ length: 35 }, (_, index) => ({
//             value: `Value${index}`,
//             label: "Red",
//         })),
//         handler: (checkedValues) =>
//             console.log("Color selected:", checkedValues),
//     },
// ];

// export default filterConfig;

// v-1
// const filterConfig = [
//     {
//         type: "radio",
//         title: "Sort By",
//         options: [
//             { value: "price", label: "Price" },
//             { value: "popularity", label: "Popularity" },
//             { value: "rating", label: "Rating" },
//         ],
//     },
//     {
//         type: "checkbox",
//         title: "Availability",
//         options: [
//             { value: "inStock", label: "In Stock" },
//             { value: "outOfStock", label: "Out of Stock" },
//         ],
//     },
//     {
//         type: "price",
//         title: "Price",
//     },
//     {
//         type: "checkbox",
//         title: "Brand",
//         options: Array.from({ length: 5 }, (_, index) => ({
//             value: `bvalue${index}`,
//             label: "Brand 1",
//         })),
//     },
//     {
//         type: "checkbox",
//         title: "Color",
//         options: Array.from({ length: 35 }, (_, index) => ({
//             value: `Value${index}`,
//             label: "Red",
//         })),
//     },
// ];

// export default filterConfig;
