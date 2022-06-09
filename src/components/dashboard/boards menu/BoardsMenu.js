import BoardsUser from "./BoardsUser";
import ToggleBoardsButton from "./ToggleBoardsButton";

const BoardsMenu = () => {
  return (
    <div className="boards-menu-container">
      <h2 className="boards-menu-title">
        Tus tableros {localStorage.getItem("name")}
      </h2>
      <BoardsUser />
      <ToggleBoardsButton />
    </div>
  );
};

export default BoardsMenu;
