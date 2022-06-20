import IconButton from "../IconButton";
import Separator from "../Separator";
import Avatar from "../Avatar";
import CreateList from "./CreateList";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateBoard } from "../../../store/reducers/Board.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserPlus,
  faStar,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

const Tools = ({ data }) => {
  const { theBoards } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const [newBoardName, setNewBoardName] = useState(boardName);

  const theBoard = () => {
    const res = theBoards.filter((item) => item.name === boardName);
  };

  useEffect(() => {
    theBoard();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateBoard(data._id, {
        ...data,
        name: newBoardName,
      })
    );
  };

  const handleMark = (e) => {
    e.preventDefault();
    dispatch(
      updateBoard(data._id, {
        ...data,
        marked: !data.marked,
      })
    );
    console.log(data);
  };

  return (
    <div className="tools-bar">
      <div className="tools-boardName">
        <form onBlur={handleUpdate}>
          <input
            type="text"
            value={newBoardName}
            onChange={(e) => {
              setNewBoardName(e.target.value);
            }}
          />
        </form>
      </div>
      <form>
        <button className="button-wrapper" onClick={handleMark}>
          <IconButton
            colorChange={
              data.marked ? "tools-button-fav-marked" : "tools-button-fav"
            }
          >
            <FontAwesomeIcon icon={faStar} />
          </IconButton>
        </button>
      </form>
      <Separator />
      <Avatar id={1} />
      <IconButton styleName={"tools-button-add"}>
        <FontAwesomeIcon icon={faUserPlus} />
        Compartir
      </IconButton>

      <IconButton styleName={"tools-button-more"}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
      <CreateList boardId={data._id} />
    </div>
  );
};

export default Tools;
