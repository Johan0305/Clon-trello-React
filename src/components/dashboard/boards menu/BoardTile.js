import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import ActionButton from "../ActionButton";

const BoardTile = ({ boardName, boardId, changeChild }) => {
  const { theBoards } = useSelector((state) => state.boardReducer);
  const routeThisBoard = `http://localhost:8080/boards/${boardId}`;
  const [data, setData] = useState({});
  const [newBoardName, setNewBoardName] = useState(boardName);

  const theBoard = () => {
    const res = theBoards.filter((item) => item._id === boardId);
    setData(res[0]);
  };

  const deleteBoard = async () => {
    const deleteThis = await axios.delete(routeThisBoard);
    changeChild(1);
  };

  useEffect(() => {
    theBoard();
  }, []);

  const handleSubmitName = async (e) => {
    e.preventDefault();
    const updatedBoard = await axios.put(routeThisBoard, {
      name: newBoardName,
    });

    changeChild(1);
  };

  const handleMark = async (e) => {
    e.preventDefault();
    const mark = !data.marked;
    const markBoard = await axios.put(routeThisBoard, {
      marked: mark,
    });

    changeChild(1);
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

        <button
          onClick={handleMark}
          className={
            data.marked
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
        <a onClick={deleteBoard} className="board-tile-delete">
          <FontAwesomeIcon icon={faTrashCan} />
        </a>
      </div>
    </div>
  );
};

export default BoardTile;
