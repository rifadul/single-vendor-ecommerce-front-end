const { ENV_VARIABLE, ENV_VARIABLE_FOR_LOCAL } = require("./constant");

const domain =
    ENV_VARIABLE ?? ENV_VARIABLE_FOR_LOCAL
        ? ENV_VARIABLE ?? ENV_VARIABLE_FOR_LOCAL
        : "";

// BaseURL
let BASE_URL = domain;

// products
export const BANNER_API_URL = `${BASE_URL}/banners`;
export const CATEGORY_API_URL = `${BASE_URL}/category`;
export const PRODUCTS_API_URL = `${BASE_URL}/products`;
export const MY_CART_API_URL = `${BASE_URL}/my-cart/`;
export const ADD_TO_CART_API_URL = `${BASE_URL}/cart-items/`;
export const USER_API_URL = `${BASE_URL}/users/`;
export const USER_SIGN_IN_API_URL = `${BASE_URL}/users/login/`;
export const USER_SIGN_UP_API_URL = `${BASE_URL}/users/register/`;
export const USER_PROFILE_API_URL = `${BASE_URL}/users/profile/`;
export const USER_EMAIL_UPDATE_API_URL = `${BASE_URL}/users/update_email/`;
export const USER_PHONE_NUMBER_UPDATE_API_URL = `${BASE_URL}/users/update_phone/`;
export const CHANGE_PASSWORD_API_URL = `${BASE_URL}/users/change_password/`;
export const USER_UPDATE_IMAGE_API_URL = `${BASE_URL}/users/update_image/`;
export const FORGET_PASSWORD_API_URL = `${BASE_URL}/users/forget_password/`;
export const RESET_PASSWORD_API_URL = `${BASE_URL}/users/reset_password_with_otp/`;
export const RESEND_OTP_API_URL = `${BASE_URL}/users/resend_otp/`;
export const VERIFY_OTP_API_URL = `${BASE_URL}/users/verify_otp/`;
export const WISHLIST_API_URL = `${BASE_URL}/wishlist/`;
export const ADDRESS_API_URL = `${BASE_URL}/address/`;
export const APPLY_COUPON_API_URL = `${BASE_URL}/coupons/apply-coupon/`;
export const ORDER_API_URL = `${BASE_URL}/orders/`;
export const ORDER_DETAILS_API_URL = `${ORDER_API_URL}order_details/?order_number=`;
export const SHIPPING_METHOD_API_URL = `${BASE_URL}/shipping-methods/`;
export const PRODUCT_PRICE_STATS_API_URL = `${PRODUCTS_API_URL}/price-stats/`;
export const PRODUCT_COLORS_API_URL = `${PRODUCTS_API_URL}/colors/`;
export const TERMS_AND_CONDITIONS_API_URL = `${BASE_URL}/terms-and-conditions/`;
export const PRIVACY_POLICY_API_URL = `${BASE_URL}/privacy-policy/`;
