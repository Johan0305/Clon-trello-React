import NavLogo from "./NavLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ButtonRecent from "./ButtonRecent";
import ButtonMark from "./ButtonMark";
import ButtonCreate from "./ButtonCreate";
import ButtonNotifications from "./ButtonNotifications";
import ButtonProfile from "./ButtonProfile";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLogo />
        <ButtonRecent />
        <ButtonMark />
        <ButtonCreate />
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <form>
            <input type="text" placeholder="Buscar..."></input>
          </form>
        </div>
        <ButtonNotifications />
        <ButtonProfile />
      </div>
    </nav>
  );
};

export default Nav;
