import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIVATE } from "../../store/reducers/Modal.reducer";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TOGGLE_ALL_MODAL } from "../../store/reducers/ModalPopover.reducer";
import axios from "axios";
import { getLists } from "../../store/reducers/List.reducer";

const HeaderModal = ({ data, listModal, boardData }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(data.name);

  const updateCard = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/cards/${data._id}`, {
      ...data,
      name: name,
    });
  };
  return (
    <div className="containerInternalModal1">
      <div className="card-details-internalmodal1">
        <form onBlur={updateCard} onSubmit={updateCard}>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="board-name title-card-modal"
          />
        </form>

        <p>{`En lista "${listModal.name}"`}</p>
      </div>
      <button
        onClick={() => {
          dispatch({ type: ACTIVATE, payload: false });
          dispatch({ type: TOGGLE_ALL_MODAL });
          dispatch(getLists(boardData._id));
        }}
        className="buttonExit"
      >
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default HeaderModal;
