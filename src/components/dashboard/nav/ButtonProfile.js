import Avatar from "../Avatar";
import Popover from "../Popover";
import Divider from "../Divider";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_PROFILE } from "../../../store/reducers/Nav.reducer";

const ButtonProfile = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { buttonProfile } = useSelector((state) => state.navReducer);
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div className="navOption-profile">
      <div
        className="nav-avatar navOption-profileDiv"
        onClick={(event) => {
          dispatch({ type: TOGGLE_PROFILE, payload: !buttonProfile });
        }}
      >
        <Avatar id={1} />
      </div>

      {buttonProfile && (
        <div className="popover-profile">
          <Popover popoverTitle={"Cuenta"}>
            <div className="popover-containerProfile">
              <Avatar id={1} />
              <Link to="/profile">
                <div className="popover-user-email">
                  <h4>{name}</h4>
                  <span>{email}</span>
                </div>
              </Link>
            </div>
            <Divider />
            <a
              className="popover-close"
              onClick={() => {
                localStorage.clear();
                return nav("/");
              }}
            >
              Cerrar sesión
            </a>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonProfile;
