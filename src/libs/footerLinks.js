import { PRODUCTS_PATH } from "@/helpers/slug";

export const footerLinks = [
  {
    id: 1,
    title: "Our company",
    links: [
      // {
      //     id: 1,
      //     title: "About us",
      //     path: "/about-us",
      // },
      // {
      //     id: 2,
      //     title: "Brands list",
      //     path: "/brands-list",
      // },
      // {
      //     id: 3,
      //     title: "Site maps",
      //     path: "/site-maps",
      // },
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
      {
        id: 2,
        title: "Top rated",
        path: PRODUCTS_PATH,
      },
      // {
      //     id: 3,
      //     title: "Best sellers",
      //     path: "/best-sellers",
      // },
      {
        id: 4,
        title: "New arrivals",
        path: PRODUCTS_PATH,
      },
      // {
      //     id: 5,
      //     title: "Popular this week",
      //     path: "/popular-this-week",
      // },
      // {
      //     id: 6,
      //     title: "Deals of the week",
      //     path: "/deals-of-the-week",
      // },
    ],
  },
  // {
  //     id: 3,
  //     title: "Categories",
  //     links: [
  //         {
  //             id: 1,
  //             title: "Women collection",
  //             path: PRODUCTS_PATH,
  //         },
  //         {
  //             id: 2,
  //             title: "Mens collection",
  //             path: PRODUCTS_PATH,
  //         },
  //         {
  //             id: 3,
  //             title: "Kids collection",
  //             path: PRODUCTS_PATH,
  //         },
  //         {
  //             id: 4,
  //             title: "Jewellery ",
  //             path: PRODUCTS_PATH,
  //         },
  //         {
  //             id: 5,
  //             title: "Dry Foods",
  //             path: PRODUCTS_PATH,
  //         },
  //         // {
  //         //     id: 6,
  //         //     title: "Smart watches",
  //         //     path: "/smart-watches",
  //         // },
  //     ],
  // },
  {
    id: 4,
    title: "Help  & support",
    links: [
      {
        id: 1,
        title: "Become a seller",
        path: "https://portal.palooi.us/registration",
      },
      {
        id: 2,
        title: "Contact us",
        path: "/contact-us",
      },
      // {
      //     id: 3,
      //     title: "How to order",
      //     path: "/how-to-order",
      // },
      // {
      //     id: 4,
      //     title: "Customer support  ",
      //     path: "/customer-support  ",
      // },
      // {
      //     id: 5,
      //     title: "Return policy",
      //     path: "/return-policy",
      // },
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
      // {
      //     id: 8,
      //     title: "FAQ",
      //     path: "/faq",
      // },
    ],
  },
];
