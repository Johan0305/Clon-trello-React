import Nav from "../components/dashboard/nav/Nav";
import Avatar from "../components/dashboard/Avatar";
import AboutProfile from "../components/profile/AboutProfile";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch } from "react-redux";

const Profile = () => {
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
        <AboutProfile />
      </div>
    </div>
  );
};

export default Profile;
