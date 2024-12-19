import { PRODUCTS_PATH } from "@/helpers/slug";

export const footerLinks = [
    {
        id: 1,
        title: "Our company",
        links: [
            {
                id: 4,
                title: "Sign in",
                path: "/sign-in",
            },
            {
                id: 5,
                title: "Sign up",
                path: "/sign-up",
            },
        ],
    },
    {
        id: 2,
        title: "Products",
        links: [
            {
                id: 1,
                title: "All products",
                path: PRODUCTS_PATH,
            },
        ],
    },
    {
        id: 4,
        title: "Help  & support",
        links: [
            {
                id: 6,
                title: "Privacy policy",
                path: "/privacy-policy",
            },
            {
                id: 7,
                title: "Terms & conditions",
                path: "/terms-conditions",
            },
        ],
    },
];
