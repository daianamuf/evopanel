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
        <title>Panouri Sandwich | Evosiding România</title>
        <meta
          name="description"
          content="Panouri sandwich durabile și eficiente energetic pentru clădiri rezidențiale și comerciale. Descoperă soluțiile noastre la Evosiding. Obține o ofertă acum!"
        />

        <meta
          name="keywords"
          content="panouri sandwich, București, Ilfov, România, materiale de construcție, panouri rezidențiale, casă, design, panouri comerciale, Evosiding, panouri metalice"
        />
        <meta
          property="og:title"
          content="Panouri Sandwich | Evosiding România"
        />
        <meta
          property="og:description"
          content="Panouri sandwich durabile și eficiente energetic pentru construcții rezidențiale și comerciale. Contactează Evosiding pentru o ofertă!"
        />
        <meta
          property="og:image"
          content="https://evosiding.ro/assets/images/6.jpeg"
        />
        <meta property="og:url" content="https://evosiding.ro" />
        <meta property="og:type" content="website" />
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
