import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";
import Playground from "../components/dashboard/board/Playground";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch } from "react-redux";

const Board = () => {
  const dispatch = useDispatch();
  return (
    <div className="board-background">
      <Nav />
      <div
        onClick={(event) => {
          dispatch({ type: TOGGLE_ALL });
        }}
      >
        <Tools />
        <Playground />
      </div>
    </div>
  );
};

export default Board;
