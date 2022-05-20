import { useDispatch } from "react-redux";
import { ACTIVATE } from "../../store/reducers/Modal.reducer";
const ButtonVisualModal = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch({ type: ACTIVATE })}>Abrir modal</button>
  );
};

export default ButtonVisualModal;
