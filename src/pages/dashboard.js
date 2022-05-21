import Nav from "../components/dashboard/nav/Nav";
import BoardsMenu from "../components/dashboard/boards menu/BoardsMenu";
import Modal from "../components/Modal/Modal";
import ButtonVisualModal from "../components/Modal/ButtonVisualModal";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const moodal = useSelector((state) => state.modalReducer.modal);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.navReducer);
  return (
    <div>
      <Nav />
      <div
        onClick={(event) => {
          dispatch({ type: TOGGLE_ALL });
        }}
      >
        <BoardsMenu />
        {moodal === true ? <Modal></Modal> : null}

        <ButtonVisualModal></ButtonVisualModal>
      </div>
    </div>
  );
};

export default Dashboard;
