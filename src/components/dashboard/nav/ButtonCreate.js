import Popover from "../Popover";
import ActionButton from "../ActionButton";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CREATE } from "../../../store/reducers/Nav.reducer";
import { getBoards } from "../../../store/reducers/Board.reducer";
import { useEffect, useState } from "react";
import axios from "axios";

const ButtonCreate = () => {
  const [newBoard, setNewBoard] = useState("");
  const dispatch = useDispatch();
  const { boards } = useSelector((state) => state.boardReducer);
  const { buttonCreate } = useSelector((state) => state.navReducer);
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
            marked: true,
            closed: false,
            color: "#9ACD32",
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
