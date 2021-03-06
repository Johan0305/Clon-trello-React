import Popover from "../Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import BoardThumbnail from "./BoardThumbnail";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_RECENT } from "../../../store/reducers/Nav.reducer";

const ButtonRecent = () => {
  const dispatch = useDispatch();
  const { buttonRecent } = useSelector((state) => state.navReducer);
  const { theBoards } = useSelector((state) => state.boardReducer);

  return (
    <div className="navOption-recent">
      <a
        className="navOption-recentA"
        onClick={(event) => {
          dispatch({ type: TOGGLE_RECENT, payload: !buttonRecent });
        }}
      >
        Reciente
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
      {buttonRecent &&
        (theBoards.length === 0 ? (
          <div className="popover-recent">
            <Popover popoverTitle={"Tableros recientes"}></Popover>
          </div>
        ) : (
          <div className="popover-recent">
            <Popover popoverTitle={"Tableros recientes"}>
              <div className="popover-option">
                <div className="popover-option-board">
                  <BoardThumbnail
                    color={theBoards[theBoards.length - 1].color}
                  />
                  <h3>{theBoards[theBoards.length - 1].name}</h3>
                </div>
              </div>
            </Popover>
          </div>
        ))}
    </div>
  );
};

export default ButtonRecent;
