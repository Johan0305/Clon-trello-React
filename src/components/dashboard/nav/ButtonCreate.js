import Popover from "../Popover";
import ActionButton from "../ActionButton";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CREATE } from "../../../store/reducers/Nav.reducer";
import { posttheBoards } from "../../../store/reducers/Board.reducer";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";

const ButtonCreate = () => {
  const [newBoard, setNewBoard] = useState("");
  const { theBoards } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const { buttonCreate } = useSelector((state) => state.navReducer);
  const handleChange = (e) => {
    const { value } = e.target;
    setNewBoard(value);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (theBoards.length < 3) {
      dispatch(posttheBoards(newBoard, "#9ACD32"));
      setNewBoard("");
    } else if (theBoards.length === 3) {
      swal(
        "Tableros Ilimitados",
        "Si deseas crear tableros ilimitados debes pagar para esta opción"
      );
    }
  };

  return (
    <div className="navOption-create">
      <button
        className="action-button nav-button-create navOption-CreateBtn"
        onClick={(event) => {
          dispatch({ type: TOGGLE_CREATE, payload: !buttonCreate });
        }}
      >
        Crear
      </button>
      {buttonCreate && (
        <div className="popover-create">
          <Popover popoverTitle={"Crear tablero"}>
            <h3>
              Título del tablero
              <span className="required-field-indicator">*</span>
            </h3>
            <form className="popover-form-create" onSubmit={handleCreate}>
              <div className="popover-form-input">
                <input
                  type="text"
                  value={newBoard}
                  onChange={handleChange}
                  placeholder="Crea un nuevo tablero..."
                ></input>
              </div>
              <button className="button-wrapper">
                <ActionButton
                  label={"Crear"}
                  styleName={"popover-button-create"}
                />
              </button>
            </form>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonCreate;
