const Avatar = ({ id }) => {
  return (
    <div>
      <img
        src={localStorage.getItem("picture")}
        alt="profile-img"
        className="avatar1"
      />
    </div>
  );
};

export default Avatar;
