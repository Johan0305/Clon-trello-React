import { faAngleDown, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CALENDAR } from "../../store/reducers/ModalPopover.reducer";
import PopoverModal from "./PopoverModal";

const CalendarModal = ({ data, listModal, boardData }) => {
  const [date, setDate] = useState(new Date());
  const { buttonCalendar } = useSelector((state) => state.modalPopoverReducer);
  const dispatch = useDispatch();

  const updateDate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/cards/${data._id}`, {
      ...data,
      date:
        date.length > 0
          ? [`${date[0].toDateString()}`, `${date[1].toDateString()}`]
          : [`${date.toDateString()}`],
    });
    dispatch({
      type: TOGGLE_CALENDAR,
      payload: !buttonCalendar,
    });
  };

  return (
    <div className="containerInternalModal4">
      <strong>Fecha</strong>
      <div className="containerCalendarInternalModal4">
        <p>
          <FontAwesomeIcon icon={faCalendarDays} />
        </p>
        <span>
          {data.date.length > 1 ? (
            <p className="text-center">
              {data.date[0]} - {data.date[0]}
            </p>
          ) : date.length > 0 ? (
            <p className="text-center">
              {date[0].toDateString()} - {date[1].toDateString()}
            </p>
          ) : (
            <p className="text-center">{date.toDateString()}</p>
          )}
        </span>
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
                  {data.date.length > 0 ? (
                    <p className="text-center">
                      <strong className="bold">Fecha de inicio:</strong>{" "}
                      {data.date[0]}
                      <strong className="bold">
                        Fecha de vencimiento:
                      </strong>{" "}
                      {data.date[1]}
                    </p>
                  ) : date.length > 0 ? (
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
                  <button className="buttonAddMembers" onClick={updateDate}>
                    Guardar
                  </button>
                  <button
                    className="buttonInternalModal6"
                    onClick={() => {
                      setDate(new Date());
                    }}
                  >
                    Quitar
                  </button>
                </div>
              </PopoverModal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
