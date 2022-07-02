import Avatar from "../Avatar";
import CardTag from "./CardTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card">
      <div className="card-tags">
        <CardTag />
        <CardTag />
        <CardTag />
      </div>
      <div className="card-title">
        <h4>This is a card</h4>
      </div>
      <div className="card-footer">
        <div className="card-date">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>14 de may - 16 de may</span>
        </div>
        <Avatar id={1} />
      </div>
    </div>
  );
};

export default Card;
