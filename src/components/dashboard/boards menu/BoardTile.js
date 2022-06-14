import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getBoards } from "../../../store/reducers/Board.reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import ActionButton from "../ActionButton";

const BoardTile = ({ boardName, boardId }) => {
  const boards = useSelector((state) => state.boardReducer);
  const [data, setData] = useState({});
  const [newBoardName, setNewBoardName] = useState(boardName);
  const routeThisBoard = `http://localhost:8080/boards/${boardId}`;
  const dispatch = useDispatch();
  const deleteBoard = async () => {
    const deleteThis = await axios.delete(routeThisBoard);
    dispatch(getBoards());
  };

  const theBoard = async () => {
    const res = await axios.get(routeThisBoard);
    setData(res.data.data);
  };

  const handleSubmitName = async (e) => {
    e.preventDefault();
    const updatedBoard = await axios.put(routeThisBoard, {
      name: newBoardName,
    });
    dispatch(getBoards());
  };

  useEffect(() => {
    dispatch(getBoards());
    theBoard();
  }, []);

  const handleMark = async (e) => {
    e.preventDefault();
    const mark = !data.marked;
    const markBoard = await axios.put(routeThisBoard, {
      marked: mark,
    });
    theBoard();
  };

  return (
    <div className="board-tile" style={{ backgroundColor: data.color }}>
      <div className="board-tile-header">
        <form onBlur={handleSubmitName}>
          <input
            type="text"
            value={newBoardName}
            className="board-name"
            onChange={(e) => setNewBoardName(e.target.value)}
          />
        </form>
        <form onSubmit={handleMark}>
          <button
            className={
              data.marked
                ? "board-mark-button-marked button-wrapper"
                : "board-mark-button button-wrapper"
            }
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        </form>
      </div>
      <div className="board-tile-footer">
        <Link to={`/board/${boardName}`}>
          <ActionButton label={"Ir al tablero"} styleName={"board-tile-go"} />
        </Link>
        <a onClick={deleteBoard} className="board-tile-delete">
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </div>
    </div>
  );
};

export default BoardTile;
