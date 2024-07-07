export function generateBreadcrumbPath(routes, index) {
  if (routes[index] === "product-details") return "/" + routes.join("/");
  return "/" + routes.slice(0, index + 1).join("/");
}
