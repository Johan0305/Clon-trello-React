import Nav from "../components/dashboard/nav/Nav";
import AboutProfile from "../components/profile/AboutProfile";
import ButtonChangePassword from "../components/profile/ButtonChangePassword";
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
        <ButtonChangePassword />
      </div>
    </div>
  );
};

export default Profile;
