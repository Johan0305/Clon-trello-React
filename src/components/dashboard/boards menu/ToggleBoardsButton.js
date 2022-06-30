import { Link } from "react-router-dom";
import Payment from "./Payment";

const ToggleBoardsButton = () => {
  return (
    <div className="toggle-boards" data-cy="button-dashboard">
      Mostrar los tableros cerrados
    </div>
  );
};

export default ToggleBoardsButton;
