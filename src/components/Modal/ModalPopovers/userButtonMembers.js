const UserButtonMembers = ({ usersInfo }) => {
  const { nickname, email, picture } = usersInfo;
  return (
    <div className="userButtonMembers">
      <div>
        <img src={picture} alt="profile-img" className="avatar1" />
      </div>
      <div className="userDescription">
        <strong>{nickname}</strong>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserButtonMembers;
