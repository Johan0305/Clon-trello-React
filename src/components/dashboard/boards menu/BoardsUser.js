import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoards } from "../../../store/reducers/Board.reducer";
import { ColorPicker } from "@mantine/core";
import BoardTile from "./BoardTile";

const BoardsUser = () => {
  const [newBoard, setNewBoard] = useState("");
  const dispatch = useDispatch();
  const { boards } = useSelector((state) => state.boardReducer);
  const [color, onChange] = useState("#A2BDE8");

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewBoard(value);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (boards.length < 3) {
      try {
        const res = await axios.post(
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
        dispatch(getBoards());
      } catch (err) {
        alert("No pudimos crear el tablero, inténtalo más tarde");
      }

      setNewBoard("");
    } else if (boards.length === 3) {
      alert("Bajate las luks pues");
    }
  };

  return (
    <div className="boards-user">
      {boards.map((item, id) => {
        return <BoardTile boardName={item.name} boardId={item._id} />;
      })}
      <form onSubmit={handleCreate} className="add-board add-board-form">
        <div className="add-board-form-header">
          <input
            type="text"
            value={newBoard}
            onChange={handleChange}
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
            onChange={onChange}
            swatchesPerRow={7}
            swatches={["#FF7F50", "#FFA500", "#9370DB", "#A2BDE8", "#9ACD32"]}
            size="xs"
          />
        </div>
      </form>
    </div>
  );
};

export default BoardsUser;
