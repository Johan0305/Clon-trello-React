import Popover from "../Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons";
import BoardThumbnail from "./BoardThumbnail";
import { TOGGLE_MARK } from "../../../store/reducers/Nav.reducer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ButtonMark = () => {
  const dispatch = useDispatch();
  const { theBoards } = useSelector((state) => state.boardReducer);
  const { buttonMark } = useSelector((state) => state.navReducer);

  return (
    <div className="navOption-mark">
      <a
        className="navOption-markA"
        onClick={(event) => {
          dispatch({ type: TOGGLE_MARK, payload: !buttonMark });
        }}
        data-cy="buttonMark-nav"
      >
        Marcado
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
      {buttonMark && (
        <div className="popover-mark">
          <Popover popoverTitle={"Tableros marcados"}>
            {theBoards.map((item, _id) => {
              return (
                item.marked && (
                  <Link key={_id} to={`/board/${item.name}`}>
                    <div className="popover-option">
                      <div className="popover-option-board">
                        <BoardThumbnail color={item.color} />
                        <h3>{item.name}</h3>
                      </div>
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </Link>
                )
              );
            })}
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonMark;
