import IconButton from "../IconButton";
import Separator from "../Separator";
import Avatar from "../Avatar";
import ActionButton from "../ActionButton";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  updateBoard,
  deleteBoard,
} from "../../../store/reducers/Board.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserPlus,
  faStar,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

const Tools = ({ boardId, boardMark }) => {
  const { theBoards } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const [data, setData] = useState({});
  const [newBoardName, setNewBoardName] = useState(boardName);
  const [isMarked, setIsMarked] = useState(boardMark);

  const theBoard = () => {
    const res = theBoards.filter((item) => item.name === boardName);
    setData(res[0]);
    setIsMarked(res[0].marked);
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
    setIsMarked(!isMarked);
    dispatch(
      updateBoard(boardId, {
        ...data,
        marked: isMarked,
      })
    );
  };

  return (
    <div className="tools-bar">
      <div className="tools-boardName">
        <form onBlur={handleUpdate}>
          <input
            type="text"
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
          />
        </form>
      </div>
      <form>
        <button className="button-wrapper" onClick={handleMark}>
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
