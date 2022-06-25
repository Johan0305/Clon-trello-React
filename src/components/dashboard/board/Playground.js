import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ACTIVATE } from "../../../store/reducers/Modal.reducer";
import { updateList } from "../../../store/reducers/List.reducer";
import ReactLoading from "react-loading";
import Avatar from "../Avatar";
import CardTag from "./CardTag";
import Modal from "../../Modal/Modal";
import DeleteList from "./DeleteList";
import AddCard from "./AddCard";

const Playground = ({ theLists, boardId }) => {
  const { loading } = useSelector((state) => state.listReducer);

  const moodal = useSelector((state) => state.modalReducer.modal);
  const dispatch = useDispatch();
  const [columns, setColumns] = useState(theLists);
  const [data, setData] = useState();
  useEffect(() => {
    setColumns(theLists);
  }, []);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceIndex = columns
        .map(function (item) {
          return item._id;
        })
        .indexOf(source.droppableId);
      const sourceColumn = columns[sourceIndex];
      const destinationIndex = columns
        .map(function (item) {
          return item._id;
        })
        .indexOf(destination.droppableId);

      const destColumn = columns[destinationIndex];
      const sourceItems = [...sourceColumn.cards];
      const destItems = [...destColumn.cards];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns([
        ...columns,
        {
          ...sourceColumn,
          cards: sourceItems,
        },
        {
          ...destColumn,
          cards: destItems,
        },
      ]);
      dispatch(
        updateList(source.droppableId, {
          ...sourceColumn,
          cards: sourceItems,
        })
      );
      dispatch(
        updateList(destination.droppableId, {
          ...destColumn,
          cards: destItems,
        })
      );
    } else {
      const sourceIndex = columns
        .map(function (item) {
          return item._id;
        })
        .indexOf(source.droppableId);
      const column = columns[sourceIndex];
      const copiedItems = [...column.cards];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns([
        ...columns,
        {
          ...column,
          cards: copiedItems,
        },
      ]);
      console.log(columns[sourceIndex]);
      dispatch(
        updateList(source.droppableId, {
          ...column,
          cards: copiedItems,
        })
      );
    }
  };

  return (
    <div className="playground-grid">
      {moodal === true && <Modal data={data} />}
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {loading ? (
          <ReactLoading type="bubbles" color="#FFF" height={100} width={100} />
        ) : (
          columns.map((item, _id) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={_id}
              >
                <div className="list">
                  <div className="list-header">
                    <h3>{item.name}</h3>
                    <DeleteList listId={item._id} boardId={boardId} />
                  </div>
                  <Droppable droppableId={item._id} key={_id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "var(--positive)"
                              : "#EBECF0",
                            minHeight: "1px",
                          }}
                        >
                          {item.cards.map((item, index) => {
                            return (
                              <Draggable
                                key={item._id}
                                draggableId={item._id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      onDoubleClick={() => {
                                        setData(item);
                                        console.log(snapshot);
                                        dispatch({
                                          type: ACTIVATE,
                                          payload: true,
                                        });
                                      }}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className="card"
                                      style={{
                                        userSelect: "none",
                                        margin: "0 0 8px 0",
                                        ...provided.draggableProps.style,
                                      }}
                                      key={_id}
                                    >
                                      <div className="card-tags">
                                        <CardTag />
                                        <CardTag />
                                        <CardTag />
                                      </div>
                                      <div className="card-title">
                                        <h4>{item.name}</h4>
                                      </div>
                                      <div className="card-footer">
                                        <div className="card-date">
                                          <FontAwesomeIcon
                                            icon={faCalendarAlt}
                                          />
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
                  </Droppable>
                  <AddCard listId={item._id} boardId={boardId} />
                </div>
              </div>
            );
          })
        )}
      </DragDropContext>
    </div>
  );
};

export default Playground;
