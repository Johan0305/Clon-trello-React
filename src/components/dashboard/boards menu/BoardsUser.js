import axios from "axios";
import { useState } from "react";
import BoardTile from "./BoardTile";
import AddBoard from "./AddBoard";

const BoardsUser = () => {
  const [newBoard, setNewBoard] = useState("");

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
        <button>Crear</button>
      </form>
    </div>
  );
};

export default BoardsUser;
