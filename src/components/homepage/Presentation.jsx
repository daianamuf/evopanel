function Presentation() {
  return (
    <div className="presentation__wrapper">
      <section className="presentation">
        <img
          className="presentation__img presentation__components"
          src="/assets/images/components.png"
          alt="Componente"
        />
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
      </section>
    </div>
  );
}

export default Presentation;
