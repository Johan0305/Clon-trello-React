import Nav from "../components/dashboard/nav/Nav";
import BoardsMenu from "../components/dashboard/boards menu/BoardsMenu";
import Popover from "../components/dashboard/Popover";
import BoardThumbnail from "../components/dashboard/nav/BoardThumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ActionButton from "../components/dashboard/ActionButton";
import Notification from "../components/dashboard/nav/Notification";
import Divider from "../components/dashboard/Divider";
import Avatar from "../components/dashboard/Avatar";
import Modal from "../components/Modal/Modal";
import ButtonVisualModal from "../components/Modal/ButtonVisualModal";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const moodal = useSelector((state) => state.modalReducer.modal);
  console.log(moodal);
  return (
    <>
      <Nav />
      <BoardsMenu />
      <Popover popoverTitle={"Tableros recientes"}>
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
      </Popover>
      <Popover popoverTitle={"Tableros marcados"}>
        <div className="popover-option">
          <div className="popover-option-board">
            <BoardThumbnail />
            <h3>Republic Comando</h3>
          </div>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </Popover>
      <Popover popoverTitle={"Crear tablero"}>
        <h3>
          Título del tablero<span className="required-field-indicator">*</span>
        </h3>
        <form className="popover-form-create">
          <div className="popover-form-input">
            <input type="text"></input>
          </div>
          <ActionButton label={"Crear"} styleName={"popover-button-create"} />
        </form>
      </Popover>
      <Popover popoverTitle={"Notificaciones"}>
        <Notification>
          <span>
            Alicia te invitó a colaborar en su tablero “jardinería-2854”
          </span>
        </Notification>
        <Notification>
          <span>Alessia te invitó a colaborar en su tablero “viajes”</span>
        </Notification>
      </Popover>
      <Popover popoverTitle={"Cuenta"}>
        <div className="popover-profile">
          <Avatar />
          <div className="popover-user-email">
            <h4>Natalia Dos Santos</h4>
            <span>nat@sherwood.com</span>
          </div>
        </div>
        <Divider />
        <a className="popover-close">Cerrar sesión</a>
      </Popover>
      {moodal === true ? <Modal></Modal> : null}

      <ButtonVisualModal></ButtonVisualModal>
    </>
  );
};

   

export default Dashboard;
