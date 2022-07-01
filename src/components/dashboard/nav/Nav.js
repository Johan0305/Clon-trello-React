import NavLogo from "./NavLogo";
import ButtonRecent from "./ButtonRecent";
import ButtonMark from "./ButtonMark";
import ButtonCreate from "./ButtonCreate";
import ButtonNotifications from "./ButtonNotifications";
import ButtonProfile from "./ButtonProfile";
import ButtonSearch from "./ButtonSearch";

const Nav = ({ navColor }) => {
  return (
    <nav
      className="nav"
      style={{ backgroundColor: navColor }}
      data-cy="nav-dashboard"
    >
      <div className="nav-left">
        <NavLogo />
        <ButtonRecent />
        <ButtonMark />
        <ButtonCreate />
      </div>
      <div className="nav-right">
        <ButtonSearch />
        <ButtonNotifications />
        <ButtonProfile />
      </div>
    </nav>
  );
};

export default Nav;
