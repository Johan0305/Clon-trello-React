import Avatar from "../../dashboard/Avatar";
import swal from "sweetalert";
import { updateBoard } from "../../../store/reducers/Board.reducer";
import { useDispatch } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const UserButtonMembersSearch = ({ data, boardInfo, socket }) => {
  const dispatch = useDispatch();

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
    <div
      className="userButtonMembers userButtonMembersSearch"
      onClick={() => {
        dispatch(
          updateBoard(boardInfo._id, {
            ...boardInfo,
            user: [...boardInfo.user, data._id],
          })
        );
        socket.emit("sendNotificationFromBoard", {
          to: data._id,
          from: localStorage.getItem("token"),
          msg: `${ls.get("name")} te invitó a colaborar en su tablero "${
            boardInfo.name
          }"`,
        });
        swal("Solicitud Exitosa", `Has enviado tu tablero a ${data.name}`);
      }}
    >
      <div>
        <img src={data.picture} alt="profile-img" className="avatar1" />
      </div>
      <div className="userDescription">
        <strong>{data.name}</strong>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default UserButtonMembersSearch;
