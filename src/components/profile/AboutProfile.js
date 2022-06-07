import BoardThumbnail from "../dashboard/nav/BoardThumbnail";

const AboutProfile = () => {
  return (
    <div className="aboutProfile">
      <p className="aboutProfile-about">
        <strong>Acerca de</strong>
      </p>
      <hr></hr>
      <form>
        <p className="aboutProfile-nameUSer">Nombre de usuario:</p>
        <input
          className="aboutProfile-inputuser"
          type="text"
          placeholder="Natalia Dos Santos"
        ></input>
        <p>Correo electrónico:</p>
        <input
          className="aboutProfile-email"
          type="email"
          placeholder="nat@sherwood.com"
        ></input>
        <p>Tu foto de Perfil</p>
        <input type="file" accept="image/*" />
        <img className="aboutProfile-imgBio" />
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
