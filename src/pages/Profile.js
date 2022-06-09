import Nav from "../components/dashboard/nav/Nav";
import Avatar from "../components/dashboard/Avatar";
import AboutProfile from "../components/profile/AboutProfile";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch } from "react-redux";

const Profile = () => {
  const name = localStorage.getItem("name");
  const nickname = localStorage.getItem("nickname");
  const dispatch = useDispatch();
  return (
    <div className="profile">
      <Nav />
      <div
        className="profileContainer"
        onClick={(event) => {
          dispatch({ type: TOGGLE_ALL });
        }}
      >
        <header className="profileContainer-header">
          <Avatar type={faCrown} id={1} />
          <h2 className="profileContainer-name">{name}</h2>
          <h3 className="profileContainer-userName">@{nickname}</h3>
        </header>
        <AboutProfile />
      </div>
    </div>
  );
};

export default Profile;
