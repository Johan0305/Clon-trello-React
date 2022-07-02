import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popover from "../Popover";
import Notification from "./Notification";
import { TOGGLE_NOTIFICATIONS } from "../../../store/reducers/Nav.reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const ButtonNotifications = ({ socket }) => {
  const dispatch = useDispatch();
  const { buttonNotifications } = useSelector((state) => state.navReducer);
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    socket?.on("sendNotificationFromBoard", (msg) => {
      setNotification(notification.concat(msg));
      console.log(notification, msg);
    });
  }, [socket]);

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
            {notification.length === 0 ? (
              <h1>Tus notificaciones</h1>
            ) : (
              notification
                .map((item) => (
                  <Notification>
                    <span>{item}</span>
                  </Notification>
                ))
                .slice(notification.length - 3, notification.length)
                .reverse()
            )}
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonNotifications;
