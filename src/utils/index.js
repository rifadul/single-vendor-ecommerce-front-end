export function generateBreadcrumbPath(routes, index) {
  if (routes[index] === "product-details") return "/" + routes.join("/");
  return "/" + routes.slice(0, index + 1).join("/");
}

export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
