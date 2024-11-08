Here's the complete `README.md` file content for your Palooi e-commerce project in one file:

```markdown
# Palooi E-commerce Project

This is a Next.js-based e-commerce project named Palooi. The project offers a modern development experience and includes both client-side and server-side rendering capabilities to enhance user experience and performance.

## Getting Started

Follow the steps below to set up and run the Palooi project on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system. You can check if Node.js is installed using:

```bash
node -v
```

### Installation

1. **Clone the repository**:
   Clone the project repository to your local machine.

   ```bash
   git clone https://github.com/rifadul/palooi-ecommerce-front-end.git
   # or
   git clone git@github.com:rifadul/palooi-ecommerce-front-end.git
   # or
   gh repo clone rifadul/palooi-ecommerce-front-end

   cd palooi-ecommerce
   ```

2. **Install Node Modules**:
   Use `npm` or `yarn` to install the required dependencies.

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory and add the following environment variables:

   ```env
   PALOOI_API_DOMAIN="http://127.0.0.1:8000/api"
   NEXT_PUBLIC_PALOOI_API_DOMAIN="http://127.0.0.1:8000/api"
   ```

4. **Run the Development Server**:
   Start the development server by using the following command:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in Browser**:
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the Palooi application.

## Scripts

- `npm run dev` / `yarn dev`: Runs the development server.
- `npm run build` / `yarn build`: Builds the application for production.
- `npm run start` / `yarn start`: Runs the built application in production mode.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

Happy coding!
```