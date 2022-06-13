import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoards } from "../../../store/reducers/Board.reducer";
import BoardTile from "./BoardTile";
import AddBoard from "./AddBoard";

const BoardsUser = () => {
  const [newBoard, setNewBoard] = useState("");
  const dispatch = useDispatch();
  const { boards, loading, error } = useSelector((state) => state.boardReducer);
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
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (err) {
        alert("No pudimos crear el tablero, inténtalo más tarde");
      }
      dispatch(getBoards());

      setNewBoard("");
    } else if (boards.length == 3) {
      alert("Bajate las luks pues");
    }
  };

  return (
    <div className="boards-user">
      {boards.map((item, id) => {
        return <BoardTile boardName={item.name} boardId={item._id} />;
      })}
      <form onSubmit={handleCreate} className="add-board-form">
        <input
          type="text"
          value={newBoard}
          onChange={handleChange}
          className="add-board-input"
          placeholder="Crea un nuevo tablero..."
        />
        <button className="add-board-button">Crear tablero</button>
      </form>
    </div>
  );
};

export default BoardsUser;
