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
