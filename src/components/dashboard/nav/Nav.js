import NavLogo from "./NavLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ButtonRecent from "./ButtonRecent";
import ButtonMark from "./ButtonMark";
import ButtonCreate from "./ButtonCreate";
import ButtonNotifications from "./ButtonNotifications";
import ButtonProfile from "./ButtonProfile";
import { useState } from "react";

const Nav = () => {
  const [openModalRecent, setOpenModalRecent] = useState(false);
  const [openModalMark, setOpenModalMark] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalNotificate, setOpenModalNotificate] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);
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
        <ButtonNotifications
          open={openModalNotificate}
          setOpen={setOpenModalNotificate}
        />
        <ButtonProfile open={openModalProfile} setOpen={setOpenModalProfile} />
      </div>
    </nav>
  );
};

export default Nav;
