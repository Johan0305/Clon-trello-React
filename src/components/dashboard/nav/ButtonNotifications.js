import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popover from "../Popover";
import Notification from "./Notification";

const ButtonNotifications = ({ open, setOpen }) => {
  return (
    <div className="navOption-notification">
      <div className="nav-notifications">
        <a
          className="nav-notifications-icon navOption-notificationA"
          onClick={() => {
            open ? setOpen(false) : setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faBell} />
        </a>
      </div>

      {open && (
        <div className="popover-notifications">
          <Popover popoverTitle={"Notificaciones"}>
            <Notification>
              <span>
                Alicia te invitó a colaborar en su tablero “jardinería-2854”
              </span>
            </Notification>
            <Notification>
              <span>Alessia te invitó a colaborar en su tablero “viajes”</span>
            </Notification>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonNotifications;
