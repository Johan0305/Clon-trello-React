import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getBoards } from "../../../store/reducers/Board.reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const BoardTile = ({ boardName, boardId }) => {
  const boards = useSelector((state) => state.boardReducer);
  const [data, setData] = useState({});
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
  useEffect(() => {
    dispatch(getBoards());
    theBoard();
  }, []);
  return (
    <div className="board-tile">
      <Link to={`/board/${boardName}`}>
        <div className="board-tile-header">
          <h3 className="board-name">{boardName}</h3>
          <a
            className={
              data.marked ? "board-mark-button-marked" : "board-mark-button"
            }
          >
            <FontAwesomeIcon icon={faStar} />
          </a>
        </div>
      </Link>
      <div className="board-tile-footer">
        <a onClick={deleteBoard}>Eliminar tablero</a>
      </div>
    </div>
  );
};

export default BoardTile;
