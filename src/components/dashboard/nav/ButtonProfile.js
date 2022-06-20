import Avatar from "../Avatar";
import Popover from "../Popover";
import Divider from "../Divider";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_PROFILE } from "../../../store/reducers/Nav.reducer";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const ButtonProfile = () => {
  ls.config.encrypt = true;
  ls.config.secret = "secret-string";

  ls.config.encrypter = (data, secret) =>
    AES.encrypt(JSON.stringify(data), secret).toString();

  ls.config.decrypter = (data, secret) => {
    try {
      return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
    } catch (e) {
      return data;
    }
  };

  const dispatch = useDispatch();
  const nav = useNavigate();
  const { buttonProfile } = useSelector((state) => state.navReducer);
  const name = ls.get("name");
  const email = ls.get("email");
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
