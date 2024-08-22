function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__img"
        src="/assets/images/img2.png"
        alt="Footer Image"
      />
      <div className="footer__group footer__group--1">
        <h3>EVOSIDING</h3>
      </div>
      <div className="footer__group footer__group--2">
        <p>Str. Drumul Morii 7C - Mogoșoaia, Ilfov</p>
        <p>contact@evosiding.ro</p>
        <p>0727 849 241</p>
      </div>
      <div className="footer__group footer__group--3">
        <a
          className="footer__link"
          href="https://www.facebook.com/structurametalica"
          target="_blank"
        >
          <ion-icon className="footer__icon" name="logo-facebook"></ion-icon>
          <p>facebook.com/structurametalica</p>
        </a>
        <a
          className="footer__link footer__link--web"
          href="https://evobuild.ro"
          target="_blank"
        >
          <ion-icon className="footer__icon" name="globe-outline"></ion-icon>
          <p>www.evobuild.ro</p>
        </a>
      </div>
      <p className="footer__copyright">Copyright 2024 - EvoSiding</p>
    </footer>
  );
}

export default Footer;
