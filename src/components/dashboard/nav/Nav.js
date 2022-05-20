import NavLogo from "./NavLogo";
<<<<<<< HEAD
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
=======
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
>>>>>>> b13decd94a9019c0baa8f372de85a3230d227cb6
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLogo />
<<<<<<< HEAD

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

=======
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

>>>>>>> b13decd94a9019c0baa8f372de85a3230d227cb6
export default Nav;
