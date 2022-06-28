import { useState } from "react";
import axios from "axios";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import ButtonChangePassword from "./ButtonChangePassword";

const AboutProfile = () => {
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

  const [name, setName] = useState(ls.get("name"));
  const [nickname, setNickname] = useState(ls.get("nickname"));
  const [image, setImage] = useState(null); //capturamos para mostrar base64
  const [file, setFile] = useState(null); //capturamos archivo para enviar obj
  const [picture, setPicture] = useState(ls.get("picture"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("nickname", nickname);
    data.append("picture", file);

    localStorage.removeItem("name", "nickname", "picture");
    ls.set("name", name);
    ls.set("nickname", nickname);

    const response = await axios.put("http://localhost:8080/users", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    const updatePicture = await axios.get(
      "http://localhost:8080/users/myuser",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    ls.set("picture", updatePicture.data.data.picture);
    setPicture(ls.get("picture"));
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
      <header className="profileContainer-header">
        <img
          src={picture}
          alt="profile_img"
          width={200}
          height={200}
          className="aboutProfile-imgBio"
        ></img>
        <h2 className="profileContainer-name">{name}</h2>
        <h3 className="profileContainer-userName">@{nickname}</h3>
      </header>
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
        <label htmlFor="img">Selecciona tu nueva foto de perfil:</label>
        {!!image && (
          <img
            src={image}
            alt="Foto perfil"
            loading="lazy"
            className="aboutProfile-imgBioChoose"
          />
        )}
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={handleChange}
          className="aboutProfile-imgInputChoose"
        />
        <button className="aboutProfile-buttonUpdate">Actualizar</button>
        <ButtonChangePassword />
      </form>
    </div>
  );
};

export default AboutProfile;
