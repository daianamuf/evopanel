import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../utils/sanityClient";
import { Helmet } from "react-helmet-async";

const components = {
  types: {
    imageWithText: ({ value }) => {
      return (
        <div className="panel__color">
          {value.image && (
            <img
              className="panel__color--img"
              src={urlFor(value.image).url()}
              alt={value.text}
            />
          )}
          {value.text && <p className="panel__color--text">{value.text}</p>}
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => <p>{children}</p>,
  },
};

const breakpointColumnsObj = {
  default: 4,
  1800: 3,
  800: 2,
  500: 1,
};

function Panels() {
  const [panels, setPanels] = useState([]);
  const [visibleColors, setVisibleColors] = useState({});

  useEffect(() => {
    const query = encodeURIComponent(`*[_type == "panel"]{
      _id,
      title,
      "mainImageUrl": mainImage.asset->url,
      size, 
      weight, 
      surface,
      middle,
       colors[] {
      ...,
      image {
        asset-> {
          url
        }
      }
    }
          }`);

    const url = `https://lk48nlsu.api.sanity.io/v1/data/query/panels?query=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPanels(data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleColorsVisibility = (panelId) => {
    const content = document.getElementById(`panel-colors-${panelId}`);
    const currentHeight = visibleColors[panelId]
      ? "0px"
      : `${content.scrollHeight}px`;

    setVisibleColors((prevVisibleColors) => ({
      ...prevVisibleColors,
      [panelId]: !prevVisibleColors[panelId],
    }));

    content.style.maxHeight = currentHeight;
  };

  return (
    <>
      {/* <Helmet>
        <title>
          Descoperiți Gama Noastră de Panouri Sandwich | Evosiding România
        </title>
        <meta
          name="description"
          content="Descoperiți o selecție largă de panouri sandwich la EvoSiding, perfecte pentru îmbunătățirea izolației și durabilității clădirilor dvs. în București, România. Aflați mai multe despre produsele noastre și aplicațiile lor."
        />
        <meta
          name="keywords"
          content="panouri sandwich, izolație, materiale de construcție, București, panouri metalice, Evosiding, Romania"
        />
      </Helmet> */}
      <Helmet>
        <title>Panouri Sandwich | Evosiding România</title>
        <meta
          name="description"
          content="Descoperiți design-ul variat al panourilor sandwich de la EvoSiding. Ideal pentru îmbunătățirea izolației și rezistenței clădirilor în București și România."
        />
        <meta
          name="keywords"
          content="panouri sandwich, panouri metalice, panouri izolație, materiale de construcție, București, România, Evosiding"
        />
        <meta
          property="og:title"
          content="Panouri Sandwich Durabile și Eficiente | Evosiding România"
        />
        <meta
          property="og:description"
          content="Aflați mai multe despre panourile sandwich durabile și eficiente de la EvoSiding. Ideal pentru îmbunătățirea izolației și rezistenței clădirilor în București și România."
        />
        <meta
          property="og:image"
          content="https://evosiding.ro/assets/images/13.jpeg"
        />
        <meta property="og:url" content="https://evosiding.ro/panouri" />
      </Helmet>

      <div className="panels">
        <div className="panels__intro">
          <p>
            Transformă-ți locuința cu panourile noastre siding metalic premium!
            Oferim o gamă variată de modele și nuanțe, perfecte pentru orice
            stil arhitectural. Fie că ești în căutarea unui aspect modern,
            clasic sau rustic, avem soluția ideală pentru tine.
          </p>
        </div>
        <div className="panels__wrapper">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {panels.map((panel) => (
              <div key={panel._id} className="panel">
                <img
                  src={panel.mainImageUrl}
                  alt={panel.title}
                  className="panel__img"
                />
                <h1 className="panel__heading">{panel.title}</h1>
                {panel.size && (
                  <p className="panel__prop panel__prop--size">
                    Mărime: {panel.size}
                  </p>
                )}
                {panel.weight && (
                  <p className="panel__prop panel__prop--weight">
                    Greutate: {panel.weight}
                  </p>
                )}
                {panel.surface && (
                  <p className="panel__prop panel__prop--surface">
                    Suprafață: {panel.surface}
                  </p>
                )}
                {panel.middle && (
                  <p className="panel__prop panel__prop--middle">
                    Mijloc: {panel.middle}
                  </p>
                )}
                {panel.back && (
                  <p className="panel__prop panel__prop--back">
                    Spate: {panel.back}
                  </p>
                )}
                {panel.colors && (
                  <div>
                    <button
                      className="panel__toggle-button"
                      onClick={() => toggleColorsVisibility(panel._id)}
                    >
                      {visibleColors[panel._id] ? (
                        <img
                          className="panel__toggle-button--close"
                          src="/assets/icons/chevron-up-outline.svg"
                        />
                      ) : (
                        <div className="panel__toggle-button--open">
                          <p>Mai multe culori</p>
                          <img src="/assets/icons/chevron-down-outline.svg" />
                        </div>
                      )}
                    </button>
                    <div
                      id={`panel-colors-${panel._id}`}
                      className={`panel__colors ${visibleColors[panel._id] ? "show" : ""}`}
                    >
                      <PortableText
                        value={panel.colors}
                        components={components}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
}

export default Panels;
