import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import AppLayout from "./AppLayout";
import Error from "./components/Error";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const Panels = lazy(() => import("./pages/Panels"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/panouri",
        element: (
          <Suspense fallback={<Loader />}>
            <Panels />
          </Suspense>
        ),
      },
      {
        path: "/galerie",
        element: (
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
