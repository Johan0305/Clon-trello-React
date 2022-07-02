import axios from "axios";
import React, { useState } from "react";

const DescriptionModal = ({ data }) => {
  const [description, setDescription] = useState(
    data.description || "Pon tu descripción aquí"
  );

  const updateCard = async (e) => {
    e.preventDefault();
    await axios.put(`${process.env.REACT_APP_URL_BACK}/cards/${data._id}`, {
      ...data,
      description: description,
    });
  };
  return (
    <div>
      <div className="containerInternalModal5">
        <strong>Descripción</strong>
        <form onBlur={updateCard} onSubmit={updateCard}>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="board-name title-card-modal description-card-modal"
          />
        </form>
      </div>
    </div>
  );
};

export default DescriptionModal;
