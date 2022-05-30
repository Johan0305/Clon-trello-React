import Avatar from "../../dashboard/Avatar";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const UserButtonMembers = () => {
  return (
    <div className="userButtonMembers">
      <Avatar type={faCrown} id={1} />
      <div className="userDescription">
        <strong>Natalia Dos Santos</strong>
        <p>nat@sherwood.com</p>
      </div>
    </div>
  );
};

export default UserButtonMembers;
