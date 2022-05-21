import Avatar from "../Avatar";
import Popover from "../Popover";
import Divider from "../Divider";
import { Link } from "react-router-dom";

const ButtonProfile = ({ open, setOpen }) => {
  return (
    <div className="navOption-profile">
      <div
        className="nav-avatar navOption-profileDiv"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <Avatar />
      </div>

      {open && (
        <div className="popover-profile">
          <Popover popoverTitle={"Cuenta"}>
            <div className="popover-containerProfile">
              <Avatar />
              <Link to="/profile">
                <div className="popover-user-email">
                  <h4>Natalia Dos Santos</h4>
                  <span>nat@sherwood.com</span>
                </div>
              </Link>
            </div>
            <Divider />
            <a className="popover-close">Cerrar sesión</a>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonProfile;
