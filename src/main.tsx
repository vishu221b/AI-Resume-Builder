import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInPage from "./pages/auth/SignIn.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import SignUpPage from "./pages/auth/SignUp.tsx";
import { ThemeProvider } from "./components/theme/ThemeProvider.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <>
      <LandingPage doNavigation />
    </>,
    children: [
    ]
  },
  {
    element: <App />,
    children: [
      {
        path: "/home", element: <>
          <LandingPage />
        </>
      },
      { path: "/dashboard", element: <Dashboard /> },
    ]
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <ThemeProvider defaultTheme="dark" storageKey='custom-theming'>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </ClerkProvider>
  // </React.StrictMode >
);