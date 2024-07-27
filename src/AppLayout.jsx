import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function AppLayout() {
  const navigation = useNavigation;
  const isLoading = navigation.state === "loading";
  const location = useLocation();
  const isSlideshow = location.pathname === "/slideshow";

  return (
    <div className="wrapper">
      {!isSlideshow && <Nav />}

      {isLoading && <Loader />}
      <main>
        <Outlet />
      </main>

      {!isSlideshow && <Footer />}
    </div>
  );
}

export default AppLayout;
