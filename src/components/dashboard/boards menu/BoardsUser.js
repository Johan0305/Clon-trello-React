import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTheBoards } from "../../../store/reducers/Board.reducer";
import { ColorPicker } from "@mantine/core";
import ReactLoading from "react-loading";
import BoardTile from "./BoardTile";
import AddBoard from "./AddBoard";
import swal from "sweetalert";
import Payment from "../../dashboard/boards menu/Payment";

const BoardsUser = () => {
  const { theBoards, loading } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const [newBoard, setNewBoard] = useState("");
  const [color, setColor] = useState("#A2BDE8");

  const handleCreate = async (e) => {
    e.preventDefault();
    if (theBoards.length < 3) {
      try {
        await axios.post(
          "http://localhost:8080/boards",
          {
            name: newBoard,
            marked: false,
            closed: false,
            color: color,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(getTheBoards());
      } catch (err) {
        swal(
          "Error",
          "No pudimos crear el tablero, inténtalo más tarde",
          "error"
        );
      }

      setNewBoard("");
    } else if (theBoards.length == 3) {
      swal(
        "Tableros Ilimitados",
        "Si deseas crear tableros ilimitados debes pagar para esta opción"
      );
    }
  };

  if (loading === true) {
    return (
      <ReactLoading type="spin" color="#A2BDE8" height={100} width={100} />
    );
  }
  return (
    <div className="boards-user">
      {theBoards.map((item, id) => {
        return (
          <BoardTile
            key={id}
            boardName={item.name}
            boardId={item._id}
            boardMark={item.marked}
          />
        );
      })}

      <form onSubmit={handleCreate} className="add-board add-board-form">
        <div className="add-board-form-header">
          <input
            type="text"
            value={newBoard}
            onChange={(e) => setNewBoard(e.target.value)}
            className="add-board-input"
            placeholder="Crea un nuevo tablero..."
          />
        </div>
        <div className="add-board-form-footer">
          <button
            className="add-board-button"
            style={{ backgroundColor: color }}
          >
            Crear
          </button>
          <ColorPicker
            format="hex"
            withPicker={false}
            fullWidth
            value={color}
            onChange={setColor}
            swatchesPerRow={7}
            swatches={["#FF7F50", "#FFA500", "#9370DB", "#A2BDE8", "#9ACD32"]}
          />
        </div>
      </form>
      {theBoards.length == 3 && <Payment />}
    </div>
  );
};

export default BoardsUser;
