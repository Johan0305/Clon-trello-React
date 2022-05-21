import Popover from "../Popover";
import ActionButton from "../ActionButton";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CREATE } from "../../../store/reducers/Nav.reducer";

const ButtonCreate = () => {
  const dispatch = useDispatch();
  const { buttonCreate } = useSelector((state) => state.navReducer);
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
            <form className="popover-form-create">
              <div className="popover-form-input">
                <input type="text"></input>
              </div>
              <ActionButton
                label={"Crear"}
                styleName={"popover-button-create"}
              />
            </form>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonCreate;
