import Popover from "../Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons";
import BoardThumbnail from "./BoardThumbnail";
import { TOGGLE_MARK } from "../../../store/reducers/Nav.reducer";
import { useDispatch, useSelector } from "react-redux";

const ButtonMark = () => {
  const dispatch = useDispatch();
  const { buttonMark } = useSelector((state) => state.navReducer);

  return (
    <div className="navOption-mark">
      <a
        className="navOption-markA"
        onClick={(event) => {
          dispatch({ type: TOGGLE_MARK, payload: !buttonMark });
          console.log(buttonMark);
        }}
      >
        Marcado
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
      {buttonMark && (
        <div className="popover-mark">
          <Popover popoverTitle={"Tableros marcados"}>
            <div className="popover-option">
              <div className="popover-option-board">
                <BoardThumbnail />
                <h3>Republic Comando</h3>
              </div>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonMark;
