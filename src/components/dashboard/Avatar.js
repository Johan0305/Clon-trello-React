const Avatar = ({ id }) => {
  return (
    <div>
      <img
        src={localStorage.getItem("picture")}
        alt="profile-img"
        className={`avatar${id}`}
      />
    </div>
  );
};

export default Avatar;
