import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h3 className="nav__logo">LOGO</h3>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={"/"} className="nav__link">
            Acasă
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/panouri"} className="nav__link">
            Panouri
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/galerie"} className="nav__link">
            Galerie
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/contact"} className="nav__link nav__link--contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
