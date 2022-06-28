import { useSelector, useDispatch } from "react-redux";
import PopoverModal from "./PopoverModal";
import { TOGGLE_EDITAG } from "../../store/reducers/ModalPopover.reducer";
import { ColorPicker } from "@mantine/core";
import { useState } from "react";
import axios from "axios";

const ButtonModal = ({ item, id, usersModal }) => {
  const dispatch = useDispatch();
  const { buttonEditag } = useSelector((state) => state.modalPopoverReducer);
  const [color, setColor] = useState(item.color);
  const [name, setName] = useState(item.name);

  const updateTag = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/tags/${item._id}`, {
      ...item,
      name: name,
      color: color,
    });
    usersModal();
    dispatch({ type: TOGGLE_EDITAG, payload: 0 });
  };

  const deleteTag = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8080/tags/${item._id}`);
    usersModal();
    dispatch({ type: TOGGLE_EDITAG, payload: 0 });
  };

  return (
    <div>
      <button
        className={`buttonModal${id}`}
        onClick={() =>
          buttonEditag === 0
            ? dispatch({ type: TOGGLE_EDITAG, payload: id })
            : dispatch({ type: TOGGLE_EDITAG, payload: 0 })
        }
        style={{ backgroundColor: color }}
      >
        {item.name}
      </button>
      {buttonEditag === id && (
        <PopoverModal popoverTitle="Etiquetas">
          <div className={"form-tags-Modal"}>
            <label>
              <strong>Nombre</strong>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <strong>Selecciona un color</strong>

            <ColorPicker
              format="hex"
              withPicker={false}
              fullWidth
              value={color}
              onChange={setColor}
              swatchesPerRow={7}
              swatches={["#FF7F50", "#FFA500", "#9370DB", "#A2BDE8", "#9ACD32"]}
            />

            <div className="buttons-tag">
              <button onClick={updateTag} className="save-tag">
                Guardar
              </button>
              <button onClick={deleteTag} className="buttonInternalModal6">
                Eliminar
              </button>
            </div>
          </div>
        </PopoverModal>
      )}
    </div>
  );
};

export default ButtonModal;
