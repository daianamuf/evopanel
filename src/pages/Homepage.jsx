import { Suspense, lazy } from "react";

import Loader from "../components/Loader";

const Hero = lazy(() => import("../components/homepage/Hero"));
const Properties = lazy(() => import("../components/homepage/Properties"));
const Presentation = lazy(() => import("../components/homepage/Presentation"));
const Tutorial = lazy(() => import("../components/homepage/Tutorial"));

function Homepage() {
  return (
    <section>
      <Suspense fallback={Loader}>
        <Hero />
      </Suspense>
      <Suspense fallback={Loader}>
        <Presentation />
      </Suspense>
      <Suspense fallback={Loader}>
        <Tutorial />
      </Suspense>
      <Suspense fallback={Loader}>
        <Properties />
      </Suspense>
    </section>
  );
}

export default Homepage;
