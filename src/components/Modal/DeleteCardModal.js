import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getLists } from "../../store/reducers/List.reducer";
import { ACTIVATE } from "../../store/reducers/Modal.reducer";
import {
  TOGGLE_DELETE,
  TOGGLE_ALL_MODAL,
} from "../../store/reducers/ModalPopover.reducer";
import PopoverModal from "./PopoverModal";

const DeleteCardModal = ({ data, listModal, boardData }) => {
  const { buttonDelete } = useSelector((state) => state.modalPopoverReducer);
  const dispatch = useDispatch();

  const deleteCard = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL_BACK}/cards/${data._id}`);
      dispatch({ type: ACTIVATE, payload: false });
      dispatch({ type: TOGGLE_ALL_MODAL });
      dispatch(getLists(boardData._id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
          <button className="buttonInternalModal6" onClick={deleteCard}>
            Eliminar tarjeta
          </button>
        </PopoverModal>
      )}
    </div>
  );
};

export default DeleteCardModal;
