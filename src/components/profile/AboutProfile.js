import { useState } from "react";
import axios from "axios";

const AboutProfile = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [nickname, setNickname] = useState(localStorage.getItem("nickname"));
  const [image, setImage] = useState(null); //capturamos para mostrar base64
  const [file, setFile] = useState(null); //capturamos archivo para enviar obj
  const [picture, setPicture] = useState(localStorage.getItem("picture"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("nickname", nickname);
    data.append("picture", file);

    localStorage.removeItem("name", "nickname", "picture");
    localStorage.setItem("name", name);
    localStorage.setItem("nickname", nickname);

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
    localStorage.setItem("picture", updatePicture.data.data.picture);
    setPicture(localStorage.getItem("picture"));
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
      </form>
    </div>
  );
};

export default AboutProfile;
