import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBoard,
  deleteBoard,
} from "../../../store/reducers/Board.reducer";
import { useState, useEffect } from "react";
import ActionButton from "../ActionButton";

const BoardTile = ({ boardName, boardId, boardMark }) => {
  const { theBoards } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [newBoardName, setNewBoardName] = useState(boardName);

  const theBoard = () => {
    const res = theBoards.filter((item) => item.name === boardName);
    setData(res[0]);
  };

  useEffect(() => {
    theBoard();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(
      updateBoard(boardId, {
        ...data,
        name: newBoardName,
      })
    );
  };

  const handleMark = async (e) => {
    e.preventDefault();
    dispatch(
      updateBoard(boardId, {
        ...data,
        marked: !boardMark,
      })
    );
  };

  return (
    <div className="board-tile" style={{ backgroundColor: data.color }}>
      <div className="board-tile-header">
        <form onBlur={handleUpdate}>
          <input
            type="text"
            value={newBoardName}
            className="board-name"
            onChange={(e) => setNewBoardName(e.target.value)}
          />
        </form>
        <button
          onClick={handleMark}
          className={
            boardMark
              ? "board-mark-button-marked button-wrapper"
              : "board-mark-button button-wrapper"
          }
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
      <div className="board-tile-footer">
        <Link to={`/board/${boardName}`}>
          <ActionButton label={"Ir al tablero"} styleName={"board-tile-go"} />
        </Link>
        <a>Eliminar</a>
      </div>
    </div>
  );
};

export default BoardTile;
