import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BoardTile = ({boardName}) => {
    return (
        <div className="board-tile">
            <div className="board-tile-header">
                <h3 className="board-name">{boardName}</h3>
                <a className="board-mark-button">
                    <FontAwesomeIcon icon={faStar}/>
                </a>
            </div>
        </div>
    );
}

export default BoardTile;