import Popover from "../Popover";
import ActionButton from "../ActionButton";

const ButtonCreate = ({ open, setOpen }) => {
  return (
    <div className="navOption-create">
      <button
        className="action-button nav-button-create navOption-CreateBtn"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        Crear
      </button>
      {open && (
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
