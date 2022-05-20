import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Divider from "./Divider";

const Popover = ({ popoverTitle, children }) => {
  return (
    <div className="popover">
      <div className="popover-header">
        <p>{popoverTitle}</p>
        <a>
          <FontAwesomeIcon icon={faClose} />
        </a>
      </div>
      <Divider />
      {children}
    </div>
  );
};

export default Popover;
