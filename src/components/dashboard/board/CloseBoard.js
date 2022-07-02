import { Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { updateBoard } from "../../../store/reducers/Board.reducer";
import { useDispatch } from "react-redux";
import ActionButton from "../ActionButton";
import { useNavigate } from "react-router-dom";

const CloseBoard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = async (e) => {
    e.preventDefault();

    dispatch(
      updateBoard(data._id, {
        ...data,
        closed: !data.closed,
      })
    );
    navigate("/");
  };

  return (
    <Popover className="pop-create-list-r">
      <Popover.Button className="button-wrapper" style={{ fontSize: "16px" }}>
        <div className="tools-button-more">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </Popover.Button>
      <Popover.Panel className="pop-create-list-a">
        <div className="tools-create-list">
          <Popover.Button
            className="button-wrapper"
            style={{ fontSize: "16px" }}
            onClick={handleClose}
          >
            <ActionButton
              label={!data.closed ? "Cerrar tablero" : "Abrir tablero"}
              styleName={
                !data.closed ? "popover-button-delete" : "popover-button-create"
              }
            />
          </Popover.Button>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default CloseBoard;
