import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1800: 3,
  800: 2,
  500: 1,
};

function Panels() {
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    const query = encodeURIComponent(`*[_type == "panel"]{
      _id,
      title,
      "mainImageUrl": mainImage.asset->url,
      size, 
      weight, 
      surface,
      middle,
      back,
      "colors": colors.asset->url,
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

  return (
    <div className="panels">
      <div className="panels__intro">
        <p>
          Transformă-ți locuința cu panourile noastre siding metalic premium!
          Oferim o gamă variată de modele și nuanțe, perfecte pentru orice stil
          arhitectural. Fie că ești în căutarea unui aspect modern, clasic sau
          rustic, avem soluția ideală pentru tine.
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
                <img className="panel__colors" src={panel.colors} />
              )}
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default Panels;
