import Popover from "../Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faClose } from "@fortawesome/free-solid-svg-icons";
import BoardThumbnail from "./BoardThumbnail";

const ButtonRecent = ({ open, setOpen }) => {
  return (
    <div className="navOption-recent">
      <a
        className="navOption-recentA"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        Reciente
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
      {open && (
        <div className="popover-recent">
          <Popover popoverTitle={"Tableros recientes"}>
            <div className="popover-option">
              <div className="popover-option-board">
                <BoardThumbnail />
                <h3>Clonando Trello</h3>
              </div>
            </div>
            <div className="popover-option">
              <div className="popover-option-board">
                <BoardThumbnail />
                <h3>Rpg Game</h3>
              </div>
            </div>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default ButtonRecent;
