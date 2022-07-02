import { useState } from "react";
import { postCard } from "../../../store/reducers/Card.reducer";
import { useDispatch } from "react-redux";

const AddCard = ({ listId, boardId }) => {
  const [newCard, setNewCard] = useState("");
  const dispatch = useDispatch();
  const handleCreate = async (e) => {
    e.preventDefault();
    dispatch(postCard(listId, newCard, boardId));
    setNewCard("");
  };
  return (
    <div>
      <form className="add-card-form" onSubmit={handleCreate}>
        <input
          className="add-card-input"
          type="text"
          placeholder="Añade una tarjeta..."
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
        />
        <button className="add-card-button"> + </button>
      </form>
    </div>
  );
};

export default AddCard;
