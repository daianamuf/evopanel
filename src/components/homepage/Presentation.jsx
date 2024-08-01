import { Link } from "react-router-dom";

function Presentation() {
  return (
    <div className="presentation__wrapper">
      <section className="presentation">
        <img
          className="presentation__img presentation__components"
          src="/assets/images/components.png"
          alt="Componente"
        />
        <div className="presentation__info">
          <h2>Caracteristici ale panourilor noastre siding metalic:</h2>
          <ul>
            <li>
              <span>Durabilitate excepțională: </span>
              <p>Rezistente la intemperii, coroziune și impact.</p>
            </li>
            <li>
              <span>Întreținere minimă: </span>
              <p>
                Ușor de curățat și de menținut, economisindu-ți timp și bani.
              </p>
            </li>
            <li>
              <span>Eficiență energetică: </span>
              <p>
                Contribuie la izolarea termică a clădirii tale, reducând
                costurile de energie.
              </p>
            </li>
            <li>
              <span>Varietate de modele: </span>
              <p>Clasic, modern, rustic și industrial.</p>
            </li>
            <li>
              <span>Paletă largă de nuanțe: </span>
              <p>
                De la culori neutre (alb, gri, negru) la tonuri pământii (maro,
                bej) și culori vii (albastru, verde, roșu).
              </p>
            </li>
            <li>
              <span>Garanție extinsă: </span>
              <p>Garantăm calitatea produselor noastre pentru mulți ani.</p>
            </li>
          </ul>
        </div>
        <img
          className="presentation__img presentation__model"
          src="/assets/images/panel-model.png"
          alt="Model"
        />

        <p className="presentation__text presentation__text--model">
          Panourile dețin numeroase accente metalice, precum și experiența
          vizuală unică pentru ca peretele să nu mai fie monoton. Diversele
          opțiuni de culoare și textură, permit utilizarea panourilor metalice
          atât în domeniul decorațiunilor interioare cât și al decorațiunilor
          exterioare, pentru a răspunde nevoilor decorative personalizate ale
          utilizatorilor.
        </p>

        <p className="presentation__text presentation__text--size">
          3 OPȚIUNI DE LĂȚIME
        </p>
        <img
          className="presentation__img presentation__size"
          src="/assets/images/size2.png"
          alt="Marimi"
        />

        <div className="presentation__offer">
          <h2>Oferta noastră include:</h2>
          <ul>
            <li>
              <span>Consultanță personalizată: </span>
              <p>
                Te ajutăm să alegi modelul și nuanța potrivită pentru casa ta.
              </p>
            </li>
            <li>
              <span>Livrare rapidă: </span>
              <p>
                Asigurăm transportul rapid și sigur al panourilor către locația
                ta.
              </p>
            </li>
            <li>
              <span>Prețuri competitive: </span>
              <p>
                Oferim cele mai bune prețuri de pe piață fără a compromite
                calitatea.
              </p>
            </li>
          </ul>
        </div>
        <Link className="presentation__cta--btn" to={"/contact"}>
          Cere o ofertă
        </Link>
      </section>
    </div>
  );
}

export default Presentation;
