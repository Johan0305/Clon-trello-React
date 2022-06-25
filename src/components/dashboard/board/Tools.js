import Separator from "../Separator";
import Avatar from "../Avatar";
import CreateList from "./CreateList";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateBoard } from "../../../store/reducers/Board.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import CloseBoard from "./CloseBoard";

const Tools = ({ data }) => {
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const [newBoardName, setNewBoardName] = useState(boardName);
  const [marked, setMarked] = useState(data.marked);

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
      <Avatar id={1} />
      <div className={"tools-button-add"}>
        <FontAwesomeIcon icon={faUserPlus} />
        Compartir
      </div>
      <CreateList boardId={data._id} />
      <CloseBoard data={data} />
    </div>
  );
};

export default Tools;
