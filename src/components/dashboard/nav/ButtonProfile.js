import Avatar from "../Avatar";
import Popover from "../Popover";
import Divider from "../Divider";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_PROFILE } from "../../../store/reducers/Nav.reducer";

const ButtonProfile = () => {
  const dispatch = useDispatch();
  const { buttonProfile } = useSelector((state) => state.navReducer);
  return (
    <div className="navOption-profile">
      <div
        className="nav-avatar navOption-profileDiv"
        onClick={(event) => {
          dispatch({ type: TOGGLE_PROFILE, payload: !buttonProfile });
        }}
      >
        <Avatar type={faCrown} id={1} />
      </div>

      {buttonProfile && (
        <div className="popover-profile">
          <Popover popoverTitle={"Cuenta"}>
            <div className="popover-containerProfile">
              <Avatar type={faCrown} id={1} />
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
