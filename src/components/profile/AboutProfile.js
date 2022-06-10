import BoardThumbnail from "../dashboard/nav/BoardThumbnail";
import { useState } from "react";
import axios from "axios";

const AboutProfile = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [nickname, setNickname] = useState(localStorage.getItem("nickname"));
  const [image, setImage] = useState(null); //capturamos para mostrar base64
  const [file, setFile] = useState(null); //capturamos archivo para enviar obj

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("nickname", nickname);
    data.append("picture", file);

    localStorage.removeItem("name", "nickname", "picture");
    localStorage.setItem("name", name);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("picture", file.name);

    const response = await axios.put("http://localhost:8080/users", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const readFile = (file) => {
    const reader = new FileReader();

    //reader.onload = (e) => console.log(e.target.result);
    reader.onload = (e) => setImage(e.target.result);

    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    console.dir(e.target.files);
    readFile(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className="aboutProfile">
      <p className="aboutProfile-about">
        <strong>Acerca de</strong>
      </p>
      <hr></hr>
      <form onSubmit={handleSubmit} className="aboutProfile">
        <label htmlFor="name" className="aboutProfile-nameUSer">
          Nombre de usuario:
        </label>
        <input
          id="name"
          type="text"
          className="aboutProfile-inputuser"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label htmlFor="email">Nickname:</label>
        <input
          id="nickname"
          type="text"
          className="aboutProfile-email"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
        ></input>
        <label htmlFor="img">Tu foto de Perfil</label>
        {!!image && (
          <img
            src={image}
            alt="Foto perfil"
            loading="lazy"
            className="aboutProfile-imgBio"
          />
        )}
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={handleChange}
        />
        <button className="aboutProfile-buttonUpdate">Actualizar</button>
      </form>
      <div className="aboutprofile-recentBoards">
        <p>Tableros Recientes</p>
        <div className="popover-option">
          <div className="popover-option-board">
            <BoardThumbnail />
            <h3>Clonando Trello</h3>
          </div>
        </div>
        <div className="popover-option">
          <div className="popover-option-board">
            <BoardThumbnail />
            <h3>Rpg Game</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
