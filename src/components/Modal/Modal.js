import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CREATETAG } from "../../store/reducers/ModalPopover.reducer";
import InternalModal from "./InternalModal";
import ButtonModal from "./ButtonInternalModal2";
import PopoverModal from "./PopoverModal";
import HeaderModal from "./HeaderModal";
import { ColorPicker } from "@mantine/core";
import axios from "axios";
import swal from "sweetalert";
import CalendarModal from "./CalendarModal";
import DescriptionModal from "./DescriptionModal";
import DeleteCardModal from "./DeleteCardModal";
import MembersModal from "./MembersModal";

const Modal = ({ data, boardData, listModal }) => {
  const { buttonCreatetag } = useSelector((state) => state.modalPopoverReducer);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [color, setColor] = useState("#5f9ea0");
  const [newTag, setNewTag] = useState("");
  const [tag, setTag] = useState([]);

  useEffect(() => {
    usersModal();
  }, []);

  const usersModal = async () => {
    const info = await axios.get(
      `http://localhost:8080/boards/${boardData._id}`
    );
    const tagData = await axios.get(`http://localhost:8080/tags/${data._id}`);
    setTag(tagData.data.data);
    setUsers(info.data.data.user);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (tag.length < 6) {
      await axios.post(`http://localhost:8080/tags/${data._id}`, {
        name: newTag,
        color: color,
      });
      const tagData = await axios.get(`http://localhost:8080/tags/${data._id}`);
      setTag(tagData.data.data);
      setNewTag("");
      dispatch({
        type: TOGGLE_CREATETAG,
        payload: !buttonCreatetag,
      });
    } else {
      swal(
        "No se pudo crear tu etiqueta",
        "Solo tienes un máximo de 6 etiquetas por cada tablero"
      );
    }
  };

  return (
    <div className="modal-global">
      <div className="modal-space">
        <InternalModal>
          <HeaderModal
            data={data}
            listModal={listModal}
            boardData={boardData}
          />
        </InternalModal>
        <InternalModal>
          <MembersModal users={users} />
          <div className="container2InternalModal2">
            <strong>Etiquetas</strong>
            <div className="containerButtonsInternalModal2">
              {tag.map((item, id) => {
                return (
                  <ButtonModal
                    id={id + 1}
                    item={item}
                    usersModal={usersModal}
                  />
                );
              })}
              <div className="container-createTag">
                <button
                  className="buttonModal-create"
                  onClick={() => {
                    console.log(boardData);
                    dispatch({
                      type: TOGGLE_CREATETAG,
                      payload: !buttonCreatetag,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                {buttonCreatetag && (
                  <PopoverModal popoverTitle="Etiquetas">
                    <form onSubmit={handleCreate} className={"form-tags-Modal"}>
                      <label className="description-tagCreate">
                        <strong>Nombre</strong>
                        <small>
                          Recuerda que tu etiqueta solo puede ser de máximo 10
                          caracteres
                        </small>
                      </label>
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => {
                          setNewTag(e.target.value);
                        }}
                        placeholder="Crea una nueva etiqueta"
                      />
                      <ColorPicker
                        format="hex"
                        withPicker={false}
                        fullWidth
                        value={color}
                        onChange={setColor}
                        swatchesPerRow={5}
                        swatches={[
                          "#FF7F50",
                          "#FFA500",
                          "#9370DB",
                          "#A2BDE8",
                          "#9ACD32",
                        ]}
                      />
                      <button
                        className="create-tag"
                        style={{ backgroundColor: color }}
                      >
                        Crear una etiqueta nueva
                      </button>
                    </form>
                  </PopoverModal>
                )}
              </div>
            </div>
          </div>
        </InternalModal>
        <InternalModal>
          <CalendarModal data={data} />
        </InternalModal>
        <InternalModal>
          <DescriptionModal data={data} />
        </InternalModal>
        <InternalModal>
          <DeleteCardModal
            data={data}
            listModal={listModal}
            boardData={boardData}
          />
        </InternalModal>
      </div>
    </div>
  );
};

export default Modal;
