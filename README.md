# Shark Wave — Single Vendor E-commerce (Frontend)

Shark Wave is a single-vendor e-commerce storefront built with **Next.js 14** (App Router). It pairs server components for SEO-friendly catalog pages with client-side interactivity for cart, checkout, and account flows. Styling combines **Tailwind CSS** utility classes with **Ant Design** components, and global state is managed through React Context providers.

## 🚨 Important Notice: Cloning Prohibited

This repository is shared for **demonstration purposes only**.
**Cloning, downloading, or redistributing this code without permission is strictly prohibited.**

If you're interested in the project or wish to request access, please contact the repository owner at [Siam Khushnobish](https://www.linkedin.com/in/rifadul-islam-khushnobish-siam/).

---

## Features

- **Authentication** — Sign in, sign up, OTP verification, forget / reset password (cookie-based session via `cookies-next`).
- **Route protection** — `src/middleware.js` redirects unauthenticated users to `/sign-in` for protected routes (`/profile/*`, `/my-cart`, etc.).
- **Catalog** — Home page banners, mega-menu navigation, category pages, product listings with filter sidebar and pagination.
- **Product details** — Image carousel, description / rating tabs, ratings and reviews.
- **Cart & checkout** — Cart management, coupon codes, multi-step checkout with address selection, shipping methods, and order summary.
- **Orders** — Order success / cancel pages, active orders, order history, order details, and order tracking.
- **Profile** — Update name, email, phone, password, and profile image; manage addresses and wishlists.
- **Static pages** — Terms & conditions and privacy policy (content fetched from the API).

## Tech Stack

- **Framework:** [Next.js 14.2](https://nextjs.org/) (App Router, React Server Components)
- **UI:** [React 18](https://reactjs.org/), [Ant Design 5](https://ant.design/), [react-icons](https://react-icons.github.io/react-icons/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with `tailwind-scrollbar`, custom color palette, Poppins & Montserrat fonts
- **State:** React Context (Auth, Cart, Wishlist, Address, Order, Categories)
- **HTTP:** Native `fetch` wrapped in a `MakeApiCall` service helper
- **Cookies / auth:** [`cookies-next`](https://www.npmjs.com/package/cookies-next)
- **Notifications:** [`react-toastify`](https://fkhadra.github.io/react-toastify/)
- **Pagination:** [`react-paginate`](https://www.npmjs.com/package/react-paginate)
- **Images:** Next/Image + [`sharp`](https://sharp.pixelplumbing.com/)
- **Utilities:** [`lodash`](https://lodash.com/)
- **Linting:** ESLint (`eslint-config-next`)

## Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── (public)/              # Public route group (home, sign-in, sign-up, products, category, etc.)
│   ├── (protected)/           # Auth-gated routes (profile, my-cart, order-success/cancel)
│   ├── layout.js              # Root layout (fonts, providers, toast container, metadata)
│   ├── error.jsx              # App-level error boundary
│   ├── siteMetaData.js        # Site-wide SEO metadata
│   └── globals.css            # Tailwind base + global styles
│
├── components/                # Reusable UI primitives
│   ├── Breadcrumb/            # Dynamic breadcrumb generator
│   ├── Buttons/               # Button variants
│   ├── common/                # Loader, social buttons, shared widgets
│   ├── Errors/                # Error UI container
│   ├── FilterSidebar/         # Product filter sidebar
│   ├── Footer/                # Footer (top + primary)
│   ├── Forms/                 # Inputs (text, email, phone, OTP, password, rating, select, ...)
│   ├── Navbar/                # Top bar, primary nav, mega menu, category menu
│   ├── product/               # Product card, image carousel, listing, details, ratings
│   └── verificationForm/      # OTP / verification form pieces
│
├── contexts/                  # React Context providers
│   ├── AuthContext.js
│   ├── CartContext.js
│   ├── WishListContext.js
│   ├── AddressContext.js
│   ├── OrderContext.js
│   ├── CategoriesContext.js
│   └── Providers.js           # Composes all providers
│
├── sections/                  # Page-level composed UI (Home, Product, MyCart, Checkout,
│                              #   Order, MyAccount, Address, WishLists, SignIn/Up, OTP,
│                              #   ForgetPassword, ResetPassword, OrderSuccess, ...)
│
├── layouts/                   # Primary, Meta, and Profile layout shells
│
├── services/
│   └── MakeApiCall.js         # Generic fetch wrapper (method, headers, cache, tags, signal)
│
├── helpers/
│   ├── apiUrls.js             # Centralized backend endpoint URLs
│   ├── constant.js            # Env-variable accessors
│   └── slug.js                # App route path constants
│
├── libs/                      # Static data (mega menu, footer links, social links)
├── utils/                     # Fonts (Poppins, Montserrat), API & error handlers
└── middleware.js              # Auth middleware for protected routes
```

### Path Aliases

Configured in `jsconfig.json` — import with the `@/` prefix:

```js
import Button from '@/components/Buttons/Button';
import { AuthContext } from '@/contexts/AuthContext';
import { PRODUCTS_API_URL } from '@/helpers/apiUrls';
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18+**
- [Yarn](https://yarnpkg.com/) or npm
- A running Shark Wave backend (the API endpoints used are defined in [src/helpers/apiUrls.js](src/helpers/apiUrls.js))

Check your Node version:

```bash
node -v
```

### 1. Install dependencies

```bash
yarn install
# or
npm install
```

### 2. Configure environment variables

Copy the sample file and fill in your backend URL:

```bash
cp .env.local.sample .env.local
```

`.env.local`:

```env
SHARK_WAVE_API_DOMAIN="YOUR_BACKEND_BASE_URL"
NEXT_PUBLIC_SHARK_WAVE_API_DOMAIN="YOUR_BACKEND_BASE_URL"
```

The `NEXT_PUBLIC_` variant is required for client-side calls; the server-only variant is used during SSR/RSC.

### 3. Run the development server

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
yarn build
yarn start
```

## Scripts

| Script       | Description                          |
| ------------ | ------------------------------------ |
| `yarn dev`   | Start the Next.js development server |
| `yarn build` | Create an optimized production build |
| `yarn start` | Run the production build             |
| `yarn lint`  | Run ESLint across the project        |

## Configuration Notes

- **Allowed image domains** are configured in [next.config.mjs](next.config.mjs) — add new external image hosts there before using them with `next/image`.
- **Tailwind theme** lives in [tailwind.config.js](tailwind.config.js): extended color palette (`blue-*`, `neutral-*`, `black-*`, `warning-*`, `error-*`, `success-*`, `info-*`), custom shadows, and `fadeIn` animation.
- **Protected routes** are listed in the `matcher` of [src/middleware.js](src/middleware.js). Add or remove entries there to control auth-gating.
- **Site metadata** (title, description, social handles) is centralized in [src/app/siteMetaData.js](src/app/siteMetaData.js).

## Routing Overview

| Group         | Path                          | Purpose                         |
| ------------- | ----------------------------- | ------------------------------- |
| `(public)`    | `/`                           | Home page (banners + sections)  |
| `(public)`    | `/sign-in`, `/sign-up`        | Authentication                  |
| `(public)`    | `/otp-verification`           | OTP confirmation flow           |
| `(public)`    | `/forget-password`            | Request password reset          |
| `(public)`    | `/reset-password`             | Complete password reset         |
| `(public)`    | `/products`                   | Product listing with filters    |
| `(public)`    | `/products/product-details/*` | Product detail pages            |
| `(public)`    | `/category/*`                 | Category-scoped product listing |
| `(public)`    | `/privacy-policy`             | Privacy policy                  |
| `(public)`    | `/terms-conditions`           | Terms & conditions              |
| `(protected)` | `/my-cart`                    | Cart and coupon entry           |
| `(protected)` | `/my-cart/checkout`           | Checkout flow                   |
| `(protected)` | `/profile/my-account`         | Account info & password         |
| `(protected)` | `/profile/my-address`         | Address book                    |
| `(protected)` | `/profile/my-wishlists`       | Wishlist                        |
| `(protected)` | `/profile/active-orders`      | In-progress orders              |
| `(protected)` | `/profile/order-history`      | Past orders                     |
| `(protected)` | `/profile/track-orders`       | Order tracking                  |
| `(protected)` | `/order-success`              | Post-checkout success page      |
| `(protected)` | `/order-cancel`               | Post-checkout cancellation page |

---

Happy coding!

<style>
  a[download], a[aria-label="Download ZIP"] {
    display: none !important;
  }
</style>
