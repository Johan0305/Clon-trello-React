import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ACTIVATE } from "../../../store/reducers/Modal.reducer";
import axios from "axios";
import Avatar from "../Avatar";
import CardTag from "./CardTag";
import Modal from "../../Modal/Modal";

const Playground = ({ boardId }) => {
  const itemsFromBackend = [
    // { id: uuidv4(), content: "First task" },
    // { id: uuidv4(), content: "Second task" },
    // { id: uuidv4(), content: "Third task" },
  ];

  // const columnsFromBackend = {
  //   [uuidv4()]: {
  //     name: "Requested",
  //     items: itemsFromBackend,
  //   },
  //   [uuidv4()]: {
  //     name: "To do",
  //     items: [],
  //   },
  // };

  const columnsFromBackend = {
    [uuidv4()]: {
      name: "Requested",
      items: itemsFromBackend,
    },
    [uuidv4()]: {
      name: "To do",
      items: [],
    },
  };
  console.log(boardId);
  const getLists = async () => {
    const res = await axios.get(`http://localhost:8080/lists/${boardId}`);
  };

  useEffect(() => {
    getLists();
  }, []);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const moodal = useSelector((state) => state.modalReducer.modal);
  const dispatch = useDispatch();
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="playground-grid">
      {moodal === true && <Modal></Modal>}
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <div className="list">
                <div className="list-header">
                  <h3>{column.name}</h3>
                  <a>
                    <FontAwesomeIcon icon={faEllipsis} />
                  </a>
                </div>
                {/* <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        onDoubleClick={() => dispatch({ type: ACTIVATE })}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "var(--positive)"
                            : "#EBECF0",
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="card"
                                    style={{
                                      userSelect: "none",
                                      margin: "0 0 8px 0",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <div className="card-tags">
                                      <CardTag />
                                      <CardTag />
                                      <CardTag />
                                    </div>
                                    <div className="card-title">
                                      <h4>{item.content}</h4>
                                    </div>
                                    <div className="card-footer">
                                      <div className="card-date">
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                        <span>14 de may - 15 de may</span>
                                      </div>
                                      <Avatar id={1} />
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable> */}
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Playground;
