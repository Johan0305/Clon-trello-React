import InternalModal from "./InternalModal";
import Avatar from "../dashboard/Avatar";
import {
  faAngleDown,
  faXmark,
  faCalendarDays,
  faCrown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ButtonModal from "./ButtonInternalModal2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DESACTIVATE } from "../../store/reducers/Modal.reducer";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-global">
      <div className="modal-space">
        <InternalModal>
          <div className="containerInternalModal1">
            <strong>Tarjeta con detalles</strong>
            <p>En lista Doing</p>
            <button
              onClick={() => {
                dispatch({ type: DESACTIVATE });
              }}
              className="buttonExit"
            >
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </InternalModal>
        <InternalModal>
          <div className="container1InternalModal2">
            <div>
              <strong>Miembros</strong>
            </div>
            <div className="containerAvatarInternalModal2">
              <Avatar type={faCrown} id={1} />
              <Avatar type={faPlus} id={2} />
            </div>
          </div>
          <div className="container2InternalModal2">
            <strong>Etiquetas</strong>
            <div className="containerButtonsInternalModal2">
              <ButtonModal id={1} text={"Dev"} />
              <ButtonModal id={2} text={"BMW"} />
              <ButtonModal id={3} text={"Diseño"} />
              <ButtonModal id={4} text={"Cositas por hacer"} />
              <ButtonModal id={5} text={"Dev"} />
              <ButtonModal id={6} text={<FontAwesomeIcon icon={faPlus} />} />
            </div>
          </div>
        </InternalModal>
        <InternalModal>
          <div className="containerInternalModal4">
            <strong>Fecha</strong>
            <div className="containerCalendarInternalModal4">
              <input type="checkbox" />
              <p>
                <FontAwesomeIcon icon={faCalendarDays} />
              </p>
              <p>14 de May - 15 de May</p>
              <p>
                <FontAwesomeIcon icon={faAngleDown} />
              </p>
            </div>
          </div>
        </InternalModal>
        <InternalModal>
          <div className="containerInternalModal5">
            <strong>Descripción</strong>
            <p>Aquí se encuentra la descripción de la tarjeta</p>
          </div>
        </InternalModal>
        <InternalModal>
          <button className="buttonInternalModal6">Eliminar Tarjeta</button>
        </InternalModal>
      </div>
    </div>
  );
};

export default Modal;
