import { Suspense, lazy } from "react";
import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

const Hero = lazy(() => import("../components/homepage/Hero"));
const Properties = lazy(() => import("../components/homepage/Properties"));

function Homepage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <section>
      {isLoading && <Loader />}
      <Suspense fallback={Loader}>
        <Hero />
      </Suspense>
      <Suspense fallback={Loader}>
        <Properties />
      </Suspense>
    </section>
  );
}

export default Homepage;
