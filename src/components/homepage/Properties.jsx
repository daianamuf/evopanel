const properties = [
  {
    id: 1,
    iconName: "volume-mute-outline",
    heading: "Izolație fonică",
    text: "Panourile metalice au un efect de izolație fonică excelent. În cazul unui zgomot de 1000Hz, panourile pot reduce in jur de 40dB, creând o locuință liniștită pentru dumneavoastră.",
  },
  {
    id: 2,
    iconName: "cube-outline",
    heading: "Model 3D",
    text: "Panourile metalice satisfac cererea clienților noștri și nivelul construcţiei pe care aceştia o realizează. Cei 10 ani de experiență profesională în straturi de acoperire colorate creează o textură reală perfectă.",
  },
  {
    id: 3,
    iconName: "sunny-outline",
    heading: "Izolație termică",
    text: "Spumarea PU folosită în panouri are o conductivitate termică scăzută, iar porozitatea închisă unică și rezistența ridicată la difuzia gazelor fac ca performanțele sale de izolare termică să dureze mai mult. În aceleași cerințe de izolare termică, panourile pot reduce grosimea anvelopei clădirii pentru a crește utilizarea zonei interioare.",
  },
  {
    id: 4,
    iconName: "water-outline",
    heading: "Impermeabilitate",
    text: "Panourile metalice pot asigura o impermeabilitate perfectă. În conformitate cu recomandarea de instalare, etanşeitatea la apă poate ajunge la mai mult de 550pa.",
  },
  {
    id: 5,
    iconName: "leaf-outline",
    heading: "Ușoare",
    text: "În comparație cu cimentul fibros cu aceeași grosime, panourile noastre sunt mai ușoare și pot fi instalate mai rapid și mai sigur.",
  },
  {
    id: 6,
    iconName: "rocket-outline",
    heading: "Instalare rapidă",
    text: "În comparație cu cimentul fibros cu aceeași grosime, panourile noastre sunt mai ușoare și pot fi instalate mai rapid și mai sigur.",
  },
  {
    id: 7,
    iconName: "earth-outline",
    heading: "Ecologice",
    text: "Prin metoda de circulație a aerului, apa de ploaie de pe partea din spate a panoului poate fi evacuată rapid, împiedicând condensul de umiditate și pătrunderea căldurii solare în cameră.",
  },
  {
    id: 8,
    iconName: "shield-outline",
    heading: "Durabile",
    text: "Stratul de acoperire tradițional nu are capacitatea de a menține luciul, stratul de acoperire al panourilor noastre utilizează pigmenți micronici, a căror structură moleculară este mai compactă, face ca rezistența la deteriorarea UV să fie mai puternică.",
  },
  {
    id: 9,
    iconName: "sparkles-outline",
    heading: "Cu auto-curățare",
    text: "Tehnologia de auto-curățare are molecule din grupul polar, o hidrofilitate bună și formează membrane moleculare subțiri atunci când sunt combinate cu apă. După fixarea prafului, este ușor de îndepărtat după scurgerea apei de ploaie.",
  },
];

function Properties() {
  return (
    <section className="properties">
      <div className="properties__wrapper">
        {properties.map((prop) => (
          <div className="card" key={prop.id}>
            <div className="card__side card__side--front">
              <ion-icon name={prop.iconName} className="card__icon"></ion-icon>
              <h3 className="card__heading">{prop.heading}</h3>
            </div>
            <div className="card__side card__side--back">
              <p className="card__text">{prop.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;
