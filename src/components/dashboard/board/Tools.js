import IconButton from "../IconButton";
import Separator from "../Separator";
import Avatar from "../Avatar";
import ActionButton from "../ActionButton";
import { getBoards } from "../../../store/reducers/Board.reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserPlus,
  faStar,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

const Tools = () => {
  const { boardName } = useParams();
  const boards = useSelector((state) => state.boardReducer);
  const thisBoard = boards.boards.filter((x) => x.name === boardName);
  const [data, setData] = useState({});
  const [newBoardName, setNewBoardName] = useState(boardName);
  const dispatch = useDispatch();
  const routeThisBoard = `http://localhost:8080/boards/${thisBoard[0]._id}`;

  const theBoard = async () => {
    const res = await axios.get(routeThisBoard);
    setData(res.data.data);
  };

  const handleSubmitName = async (e) => {
    e.preventDefault();
    const updatedBoard = await axios.put(routeThisBoard, {
      name: newBoardName,
    });
  };

  const handleMark = async (e) => {
    e.preventDefault();
    const mark = !data.marked;
    const markBoard = await axios.put(routeThisBoard, {
      marked: mark,
    });
    theBoard();
  };

  useEffect(() => {
    dispatch(getBoards());
    theBoard();
  }, []);

  return (
    <div className="tools-bar">
      <div className="tools-boardName">
        <form onBlur={handleSubmitName}>
          <input
            type="text"
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
          />
        </form>
      </div>
      <form onSubmit={handleMark}>
        <button className="button-wrapper">
          <IconButton
            styleName={
              data.marked ? "tools-button-fav-marked" : "tools-button-fav"
            }
          >
            <FontAwesomeIcon icon={faStar} />
          </IconButton>
        </button>
      </form>
      <Separator />
      <Avatar />
      <IconButton styleName={"tools-button-add"}>
        <FontAwesomeIcon icon={faUserPlus} />
        Compartir
      </IconButton>
      <ActionButton
        styleName={"action-button tools-button-filter"}
        label={"Filtrar"}
      />
      <IconButton styleName={"tools-button-more"}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
    </div>
  );
};

export default Tools;
