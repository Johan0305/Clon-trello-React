import Separator from "../Separator";
import Avatar from "../Avatar";
import CreateList from "./CreateList";

import CloseBoard from "./CloseBoard";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateBoard } from "../../../store/reducers/Board.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import ShareBoards from "./ShareBoards";

const Tools = ({ data }) => {
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const [newBoardName, setNewBoardName] = useState(boardName);
  const [marked, setMarked] = useState(data.marked);
  const prof = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateBoard(data._id, {
        ...data,
        name: newBoardName,
      })
    );
  };

  const handleMark = async (e) => {
    e.preventDefault();
    dispatch(
      updateBoard(data._id, {
        ...data,
        marked: !marked,
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
            onChange={(e) => {
              setNewBoardName(e.target.value);
            }}
          />
        </form>
      </div>

      <button
        onClick={(e) => {
          handleMark(e);
          setMarked(!marked);
        }}
        className={
          marked
            ? "button-wrapper tools-button-fav-marked"
            : "button-wrapper tools-button-fav"
        }
      >
        <FontAwesomeIcon icon={faStar} />
      </button>

      <Separator />
      <div
        onClick={() => {
          prof("/profile");
        }}
      >
        <Avatar id={1} />
      </div>
      <ShareBoards boardInfo={data} />
      <CreateList boardId={data._id} />
      <CloseBoard data={data} />
    </div>
  );
};

export default Tools;
