import NavLogo from "./NavLogo";
import ActionButton from "../ActionButton";
import Avatar from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faAngleDown,
  faMagnifyingGlass,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLogo />

        <div className="nav-option">
          <a>
            Reciente
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </div>
        <div className="nav-option">
          <a>
            Marcado
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </div>
        <ActionButton
          styleName={"action-button nav-button-create"}
          label={"Crear"}
        />
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <form>
            <input type="text" placeholder="Buscar..."></input>
          </form>
        </div>
        <div className="nav-notifications">
          <a className="nav-notifications-icon">
            <FontAwesomeIcon icon={faBell} />
          </a>
        </div>
        <div className="nav-avatar">
          <Avatar type={faCrown} id={1} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
