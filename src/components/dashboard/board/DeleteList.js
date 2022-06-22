import { Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { deleteList } from "../../../store/reducers/List.reducer";
import { useDispatch } from "react-redux";

import ActionButton from "../ActionButton";
const DeleteList = ({ listId }) => {
  const dispatch = useDispatch();
  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteList(listId));
  };
  return (
    <Popover>
      <Popover.Button className="button-wrapper" style={{ fontSize: "16px" }}>
        <FontAwesomeIcon icon={faEllipsis} />
      </Popover.Button>
      <Popover.Panel className="pop-create-list-a">
        <div className="tools-create-list">
          <Popover.Button
            className="button-wrapper"
            style={{ fontSize: "16px" }}
            onClick={handleDelete}
          >
            <ActionButton
              label={"Borrar"}
              styleName={"popover-button-create"}
            />
          </Popover.Button>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default DeleteList;
