import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Fleet = lazy(() => import("@/pages/Fleet"));
const Contact = lazy(() => import("@/pages/Contact"));
function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-gold" />
        <p className="mt-4 text-sm font-medium text-slate-500">Loading...</p>
      </div>
    </div>
  );
}
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "services",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
          ),
        },
        {
          path: "fleet",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Fleet />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}