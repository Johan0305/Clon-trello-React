import Avatar from "../../dashboard/Avatar";

const UserButtonMembers = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div className="userButtonMembers">
      <Avatar id={1} />
      <div className="userDescription">
        <strong>{name}</strong>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserButtonMembers;
