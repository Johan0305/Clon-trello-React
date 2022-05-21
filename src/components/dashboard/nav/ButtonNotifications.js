import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popover from "../Popover";
import Notification from "./Notification";
import { TOGGLE_NOTIFICATIONS } from "../../../store/reducers/Nav.reducer";
import { useSelector, useDispatch } from "react-redux";

const ButtonNotifications = () => {
  const dispatch = useDispatch();
  const { buttonNotifications } = useSelector((state) => state.navReducer);

  return (
    <div className="navOption-notification">
      <div className="nav-notifications">
        <a
          className="nav-notifications-icon navOption-notificationA"
          onClick={(event) => {
            dispatch({
              type: TOGGLE_NOTIFICATIONS,
              payload: !buttonNotifications,
            });
          }}
        >
          <FontAwesomeIcon icon={faBell} />
        </a>
      </div>

      {buttonNotifications && (
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
