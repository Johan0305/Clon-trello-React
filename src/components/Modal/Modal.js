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
import { ACTIVATE, DESACTIVATE } from "../../store/reducers/Modal.reducer";
import PopoverModal from "./PopoverModal";
import { useSelector, useDispatch } from "react-redux";
import {
  TOGGLE_CALENDAR,
  TOGGLE_MEMBERS,
  TOGGLE_DELETE,
  TOGGLE_CREATETAG,
  TOGGLE_ALL_MODAL,
} from "../../store/reducers/ModalPopover.reducer";
import UserButtonMembers from "./ModalPopovers/userButtonMembers";
import { useState } from "react";
import Calendar from "react-calendar";

const Modal = ({ data }) => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const { buttonMembers, buttonDelete, buttonCreatetag, buttonCalendar } =
    useSelector((state) => state.modalPopoverReducer);
  const tagName = ["Dev", "BMW", "Diseño", "Cositas por hacer", "Dev"];
  return (
    <div className="modal-global" key={data._id}>
      <div className="modal-space">
        <InternalModal>
          <div className="containerInternalModal1">
            <div className="card-details-internalmodal1">
              <strong>{data.content}</strong>
              <p>En lista Doing</p>
            </div>
            <button
              onClick={() => {
                dispatch({ type: ACTIVATE, payload: false });
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
              <FontAwesomeIcon icon={faCrown} className="avatar2" />
              <div>
                <span
                  className="membersModal"
                  onClick={() =>
                    dispatch({ type: TOGGLE_MEMBERS, payload: !buttonMembers })
                  }
                >
                  <Avatar type={faPlus} id={1} />
                </span>
                {buttonMembers && (
                  <div className="PopoverModalAvatar">
                    <PopoverModal popoverTitle={"Miembros"}>
                      <input
                        type="email"
                        className="inputForm"
                        placeholder="Ingrese un correo electronico"
                      />
                      <UserButtonMembers></UserButtonMembers>
                      <button className="buttonAddMembers">
                        Añadir miembro
                      </button>
                    </PopoverModal>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="container2InternalModal2">
            <strong>Etiquetas</strong>
            <div className="containerButtonsInternalModal2">
              {tagName.map((text, id) => (
                <ButtonModal id={id + 1} text={text}></ButtonModal>
              ))}
              <div className="container-createTag">
                <button
                  className="buttonModal6"
                  onClick={() =>
                    dispatch({
                      type: TOGGLE_CREATETAG,
                      payload: !buttonCreatetag,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                {buttonCreatetag && (
                  <PopoverModal popoverTitle="Etiquetas">
                    <label>
                      <strong>Nombre</strong>
                    </label>
                    <input type="text" />
                    <div className="colors-tags-create">
                      {tagName.map((text) => (
                        <button className="color-tag-create">{text}</button>
                      ))}
                    </div>
                    <button className="create-tag">
                      Crear una etiqueta nueva
                    </button>
                  </PopoverModal>
                )}
              </div>
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
              <p>
                {date.length > 0 ? (
                  <p className="text-center">
                    {date[0].toDateString()} -{date[1].toDateString()}
                  </p>
                ) : (
                  <p className="text-center">{date.toDateString()}</p>
                )}
              </p>
              <div>
                <p
                  className="calendar-dropdown"
                  onClick={() =>
                    dispatch({
                      type: TOGGLE_CALENDAR,
                      payload: !buttonCalendar,
                    })
                  }
                >
                  <FontAwesomeIcon icon={faAngleDown} />
                </p>
                {buttonCalendar && (
                  <div className="containerPopoverCalendar">
                    <PopoverModal popoverTitle="Fechas">
                      <div className="calendarModal">
                        <div className="calendar-container">
                          <Calendar
                            onChange={setDate}
                            value={date}
                            selectRange={true}
                          />
                        </div>
                        {date.length > 0 ? (
                          <p className="text-center">
                            <strong className="bold">Fecha de inicio:</strong>{" "}
                            {date[0].toDateString()}
                            <strong className="bold">
                              Fecha de vencimiento:
                            </strong>{" "}
                            {date[1].toDateString()}
                          </p>
                        ) : (
                          <p className="text-center">
                            <strong className="bold">Fecha por default</strong>{" "}
                            {date.toDateString()}
                          </p>
                        )}
                      </div>
                      <div className="container-buttons-calendar">
                        <button className="buttonAddMembers">Guardar</button>
                        <button className="buttonInternalModal6">Quitar</button>
                      </div>
                    </PopoverModal>
                  </div>
                )}
              </div>
            </div>
          </div>
        </InternalModal>
        <InternalModal>
          <div className="containerInternalModal5">
            <strong>Descripción</strong>
            <p>La tarjeta tiene el id {data.id}</p>
          </div>
        </InternalModal>
        <InternalModal>
          <div>
            <button
              className="buttonInternalModal6"
              onClick={() =>
                dispatch({ type: TOGGLE_DELETE, payload: !buttonDelete })
              }
            >
              Eliminar Tarjeta
            </button>
            {buttonDelete && (
              <PopoverModal popoverTitle="¿Deseas eliminar esta tarjeta?">
                <p>Recuerda que no es posible deshacer esta acción.</p>
                <button className="buttonInternalModal6">
                  Eliminar tarjeta
                </button>
              </PopoverModal>
            )}
          </div>
        </InternalModal>
      </div>
    </div>
  );
};

export default Modal;
