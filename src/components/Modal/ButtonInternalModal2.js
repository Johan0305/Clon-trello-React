import { useSelector, useDispatch } from "react-redux";
import PopoverModal from "./PopoverModal";
import { TOGGLE_EDITAG } from "../../store/reducers/ModalPopover.reducer";

const ButtonModal = ({ text, id }) => {
  const dispatch = useDispatch();
  const { buttonEditag } = useSelector((state) => state.modalPopoverReducer);
  const colorsArray = [
    "59A7A7",
    "99D7C7",
    "BAC948",
    "E2D469",
    "6C8CBF",
    "D799CD",
    "48C964",
    "E26969",
  ];

  return (
    <div>
      <button
        className={`buttonModal${id}`}
        onClick={() =>
          buttonEditag === 0
            ? dispatch({ type: TOGGLE_EDITAG, payload: id })
            : dispatch({ type: TOGGLE_EDITAG, payload: 0 })
        }
      >
        {text}
      </button>
      {buttonEditag === id && (
        <PopoverModal popoverTitle="Etiquetas">
          <label>
            <strong>Nombre</strong>
          </label>
          <input type="text" value={text} />
          <strong>Selecciona un color</strong>
          <div className="grid-colors-tags">
            {colorsArray.map((e) => (
              <div className="color-tag"></div>
            ))}
          </div>
          <div className="buttons-tag">
            <button className="save-tag">Guardar</button>
            <button className="buttonInternalModal6">Eliminar</button>
          </div>
        </PopoverModal>
      )}
    </div>
  );
};

export default ButtonModal;
