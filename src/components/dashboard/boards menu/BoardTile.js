import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BoardTile = ({ boardName }) => {
  return (
    <Link to="/board">
      <div className="board-tile">
        <div className="board-tile-header">
          <h3 className="board-name">{boardName}</h3>
          <a className="board-mark-button">
            <FontAwesomeIcon icon={faStar} />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default BoardTile;
