import { lazy } from "react";

const Hero = lazy(() => import("../components/homepage/Hero"));
const Properties = lazy(() => import("../components/homepage/Properties"));
const Presentation = lazy(() => import("../components/homepage/Presentation"));
const Tutorial = lazy(() => import("../components/homepage/Tutorial"));

function Homepage() {
  return (
    <section>
      <Hero />

      <Presentation />

      <Tutorial />

      <Properties />
    </section>
  );
}

export default Homepage;
