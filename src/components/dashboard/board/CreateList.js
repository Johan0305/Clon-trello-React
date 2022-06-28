import { useState } from "react";
import { Popover } from "@headlessui/react";
import ActionButton from "../ActionButton";
import { postList } from "../../../store/reducers/List.reducer";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

const CreateList = ({ boardId }) => {
  const [newList, setNewList] = useState("");
  const dispatch = useDispatch();
  const handleCreate = async (e) => {
    e.preventDefault();
    dispatch(postList(boardId, newList));
    setNewList("");
    swal("Éxito", "Lista creada exitosamente");
  };
  return (
    <Popover className="pop-create-list-r">
      <Popover.Button className="button-wrapper" style={{ fontSize: "16px" }}>
        <ActionButton
          styleName={"action-button tools-button-filter"}
          label={"Crear lista"}
        />
      </Popover.Button>

      <Popover.Panel className="pop-create-list-a">
        <div className="tools-create-list">
          <h3>
            Título de la lista
            <span className="required-field-indicator">*</span>
          </h3>
          <form>
            <div className="popover-form-input">
              <input
                type="text"
                placeholder="Nueva lista..."
                value={newList}
                onChange={(e) => setNewList(e.target.value)}
              ></input>
            </div>

            <Popover.Button
              className="button-wrapper"
              style={{ fontSize: "16px" }}
              onClick={handleCreate}
            >
              <ActionButton
                label={"Crear"}
                styleName={"popover-button-create"}
              />
            </Popover.Button>
          </form>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default CreateList;
