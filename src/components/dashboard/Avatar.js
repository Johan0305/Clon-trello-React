const Avatar = ({ type, id }) => {
  return (
    <div className={`avatar${id}`}>
      <img
        src={localStorage.getItem("picture")}
        alt="profile-img"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Avatar;
