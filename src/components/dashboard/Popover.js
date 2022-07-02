import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Divider from "./Divider";
import { TOGGLE_ALL } from "../../store/reducers/Nav.reducer";
import { useSelector, useDispatch } from "react-redux";

const Popover = ({ popoverTitle, children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.navReducer);

  return (
    <div className="popover">
      <div className="popover-header">
        <p>{popoverTitle}</p>
        <a
          onClick={(event) => {
            dispatch({ type: TOGGLE_ALL });
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

export default Popover;
