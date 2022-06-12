import { Link } from "react-router-dom";
import Payment from "./Payment";

const ToggleBoardsButton = () => {
  return (
    <div>
      <div className="toggle-boards">Mostrar los tableros cerrados</div>
      <Payment />
    </div>
  );
};

export default ToggleBoardsButton;
