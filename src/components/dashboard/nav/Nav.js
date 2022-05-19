import NavLogo from "./NavLogo";
import Avatar from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ButtonRecent from "./ButtonRecent";
import ButtonMark from "./ButtonMark";
import ButtonCreate from "./ButtonCreate";
import { useState } from "react";

const Nav = () => {
  const [openModalRecent, setOpenModalRecent] = useState(false);
  const [openModalMark, setOpenModalMark] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLogo />
        <ButtonRecent open={openModalRecent} setOpen={setOpenModalRecent} />
        <ButtonMark open={openModalMark} setOpen={setOpenModalMark} />
        <ButtonCreate open={openModalCreate} setOpen={setOpenModalCreate} />
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
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
