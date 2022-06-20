import BoardsUser from "./BoardsUser";
import ToggleBoardsButton from "./ToggleBoardsButton";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const BoardsMenu = () => {
  ls.config.encrypt = true;
  ls.config.secret = "secret-string";

  ls.config.encrypter = (data, secret) =>
    AES.encrypt(JSON.stringify(data), secret).toString();

  ls.config.decrypter = (data, secret) => {
    try {
      return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
    } catch (e) {
      return data;
    }
  };
  return (
    <div className="boards-menu-container">
      <h2 className="boards-menu-title">Tus tableros {ls.get("name")}</h2>
      <BoardsUser />
      <ToggleBoardsButton />
    </div>
  );
};

export default BoardsMenu;
