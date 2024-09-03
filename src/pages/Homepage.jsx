import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(() => import("../components/homepage/Hero"));
const Properties = lazy(() => import("../components/homepage/Properties"));
const Presentation = lazy(() => import("../components/homepage/Presentation"));
const Tutorial = lazy(() => import("../components/homepage/Tutorial"));
const Slider = lazy(() => import("../components/homepage/Slider"));

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Panouri Sandwich pentru Case | Evosiding România</title>
        <meta
          name="description"
          content="Evosiding oferă panouri sandwich de înaltă calitate pentru clădiri rezidențiale și comerciale în România. Descoperiți gama noastră largă de soluții durabile și eficiente energetic. Contactați-ne pentru o ofertă!"
        />
        <meta
          name="keywords"
          content="panouri sandwich, București, Ilfov, România, materiale de construcție, panouri rezidențiale, casă, design, panouri comerciale, Evosiding, panouri metalice"
        />
      </Helmet>
      <section>
        <Hero />

        <Presentation />

        <Tutorial />

        <Properties />

        <Slider />
      </section>
    </>
  );
}

export default Homepage;
