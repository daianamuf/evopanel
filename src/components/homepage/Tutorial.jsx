function Tutorial() {
  return (
    <section className="tutorial">
      <img
        className="tutorial__img"
        src="/assets/images/instalation.png"
        alt="Instalarea"
      />
      <div className="tutorial__steps">
        <div className="tutorial__step">
          <p className="tutorial__step--text">
            <span>1.</span> Instalați cadrul pe perete și apoi părțile iniţiale
            din partea de jos. Cadrul trebuie să fie din oțel sau cadru din lemn
            antiseptic.
          </p>
          <img
            className="tutorial__step--img"
            src="/assets/images/step1.png"
            alt="Pasul 1"
          />
        </div>

        <div className="tutorial__step">
          <p className="tutorial__step--text">
            <span>2.</span> Instalați panoul cu șuruburi autofiletante.
            Spațierea trebuie să fie mai mică de 50 cm.
          </p>
          <img
            className="tutorial__step--img"
            src="/assets/images/step2.png"
            alt="Pasul 2"
          />
        </div>

        <div className="tutorial__step">
          <p className="tutorial__step--text">
            <span>3.</span> Toate accesoriile trebuie umplute cu adeziv
            antiintemperii înainte și după instalare.
          </p>
          <img
            className="tutorial__step--img"
            src="/assets/images/step3.png"
            alt="Pasul 3"
          />
        </div>
      </div>
    </section>
  );
}

export default Tutorial;
