import { NextResponse } from "next/server";
import { SIGN_IN_PATH } from "./helpers/slug";

export async function middleware(request) {
    let currentUser = request.cookies.get("userInfo");
    // const response = NextResponse.next();
    const pathname = request.nextUrl.pathname;

    if (!currentUser) {
        return NextResponse.redirect(
            new URL(
                `${
                    pathname
                        ? `${SIGN_IN_PATH}?redirect=${pathname}`
                        : SIGN_IN_PATH
                }`,
                request.url
            )
        );
    }
}

export const config = {
    matcher: [
        // "/change-email",
        // "/change-email-verification",
        // "/change-password",
        // // "/change-password-confirmation",
        // // "/change-password-verification",
        // "/order-confirmation",
        // "/place-order",
        // "/change-phone",
        // "/change-phone-verification",
        // "/profile/my-account",
        // "/profile/active-orders",
        // "/profile/my-address",
        // "/profile/my-wishlist",
        // "/profile/credit-balance",
        // "/profile/order-history/:orderId*",
        // "/my-cart",
        // // "/products/product-details/:slug*", // example
    ],
};
