import Popover from "../Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons";
import BoardThumbnail from "./BoardThumbnail";

const ButtonMark = ({ open, setOpen }) => {
  return (
    <div className="navOption-mark">
      <a
        className="navOption-markA"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        Marcado
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
      {open && (
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
