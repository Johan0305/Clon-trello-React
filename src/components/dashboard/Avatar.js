import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = ({ type, id }) => {
  return (
    <div className={`avatar${id}`}>
      <FontAwesomeIcon icon={type} />
    </div>
  );
};

export default Avatar;
