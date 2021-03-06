import axios from "axios";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTheBoards,
  posttheBoards,
} from "../../../store/reducers/Board.reducer";
import { ColorPicker } from "@mantine/core";
import ReactLoading from "react-loading";
import BoardTile from "./BoardTile";
import ToggleBoardsButton from "./ToggleBoardsButton";
import swal from "sweetalert";
import Payment from "../../dashboard/boards menu/Payment";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const BoardsUser = () => {
  const { theBoards, loading } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const [newBoard, setNewBoard] = useState("");
  const [color, setColor] = useState("#A2BDE8");

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

  useState(() => {
    dispatch(getTheBoards());
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (theBoards.length < 3 && ls.get("premium") === false) {
      dispatch(posttheBoards(newBoard, color));
      setNewBoard("");
    } else if (ls.get("premium")) {
      dispatch(posttheBoards(newBoard, color));
      setNewBoard("");
    } else if (theBoards.length === 3 && ls.get("premium") === false) {
      swal(
        "Tableros Ilimitados",
        "Si deseas crear tableros ilimitados debes pagar para esta opción"
      );
    }
  };

  if (loading === true) {
    return (
      <ReactLoading type="spin" color="#A2BDE8" height={100} width={100} />
    );
  }
  return (
    <div>
      <div className="boards-user">
        {theBoards
          .filter((item) => !item.closed)
          .map((item, id) => {
            return (
              <BoardTile
                key={id}
                boardName={item.name}
                boardId={item._id}
                boardMark={item.marked}
              />
            );
          })}

        <form onSubmit={handleCreate} className="add-board add-board-form">
          <div className="add-board-form-header">
            <input
              type="text"
              value={newBoard}
              onChange={(e) => setNewBoard(e.target.value)}
              className="add-board-input"
              placeholder="Crea un nuevo tablero..."
            />
          </div>
          <div className="add-board-form-footer">
            <button
              className="add-board-button"
              style={{ backgroundColor: color }}
              data-cy="button-dashboard"
            >
              Crear
            </button>
            <ColorPicker
              format="hex"
              withPicker={false}
              fullWidth
              value={color}
              onChange={setColor}
              swatchesPerRow={7}
              swatches={["#FF7F50", "#FFA500", "#9370DB", "#A2BDE8", "#9ACD32"]}
            />
          </div>
        </form>
        {theBoards.length === 3 && ls.get("premium") === false && <Payment />}
      </div>
      <Disclosure>
        <Disclosure.Button
          className="button-wrapper"
          style={{ fontSize: "16px", color: "var(--black)" }}
        >
          <ToggleBoardsButton data-cy="button-closeBoards" />
        </Disclosure.Button>
        <Disclosure.Panel>
          <div className="boards-closed">
            <h2>Tableros cerrados</h2>
            <div className="boards-user">
              {theBoards
                .filter((item) => item.closed)
                .map((item, id) => {
                  return (
                    <BoardTile
                      key={id}
                      boardName={item.name}
                      boardId={item._id}
                      boardMark={item.marked}
                    />
                  );
                })}
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default BoardsUser;
