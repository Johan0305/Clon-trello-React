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
    try {
      const res = await axios.post(
        "http://localhost:8080/boards",
        {
          name: newBoard,
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
  };

  return (
    <div className="boards-user">
      <BoardTile boardName={"GTA"} />
      <BoardTile boardName={"Soccer"} />
      <form onSubmit={handleCreate}>
        <input type="text" value={newBoard} onChange={handleChange} />
        <button onClick={() => dispatch(getBoards())}>Crear</button>
      </form>
    </div>
  );
};

export default BoardsUser;
