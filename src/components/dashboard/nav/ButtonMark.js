import Popover from "../Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons";
import BoardThumbnail from "./BoardThumbnail";
import { TOGGLE_MARK } from "../../../store/reducers/Nav.reducer";
import { getBoards } from "../../../store/reducers/Board.reducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const ButtonMark = () => {
  const dispatch = useDispatch();
  const { buttonMark } = useSelector((state) => state.navReducer);
  const { boards } = useSelector((state) => state.boardReducer);

  return (
    <div className="navOption-mark">
      <a
        className="navOption-markA"
        onClick={(event) => {
          dispatch({ type: TOGGLE_MARK, payload: !buttonMark }, getBoards());
        }}
      >
        Marcado
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
      {buttonMark && (
        <div className="popover-mark">
          <Popover popoverTitle={"Tableros marcados"}>
            {boards.map((item, _id) => {
              return (
                <div className="popover-option">
                  <div className="popover-option-board">
                    <BoardThumbnail />
                    <h3>{item.name}</h3>
                  </div>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              );
            })}
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonMark;
