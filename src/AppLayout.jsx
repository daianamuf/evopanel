import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "./components/Loader";

const Nav = lazy(() => import("./components/Nav"));
const Footer = lazy(() => import("./components/Footer"));

function AppLayout() {
  const navigation = useNavigation;
  const isLoading = navigation.state === "loading";
  const location = useLocation();
  const isSlideshow = location.pathname === "/slideshow";

  return (
    <div className="wrapper">
      {!isSlideshow && (
        <Suspense fallback={<Loader />}>
          <Nav />
        </Suspense>
      )}

      {isLoading && <Loader />}
      <main>
        <Outlet />
      </main>

      {!isSlideshow && (
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default AppLayout;
