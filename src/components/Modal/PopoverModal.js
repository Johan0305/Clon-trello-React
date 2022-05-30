import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Divider from "../dashboard/Divider";
import { useDispatch } from "react-redux";
import { TOGGLE_ALL_MODAL } from "../../store/reducers/ModalPopover.reducer";

const PopoverModal = ({ popoverTitle, children }) => {
  const dispatch = useDispatch();

  return (
    <div className="popoverModal">
      <div className="popoverModal-header">
        <p>{popoverTitle}</p>
        <a
          onClick={() => {
            dispatch({ type: TOGGLE_ALL_MODAL });
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </a>
      </div>
      <Divider />
      {children}
    </div>
  );
};

export default PopoverModal;
