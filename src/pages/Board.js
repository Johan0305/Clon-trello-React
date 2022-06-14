import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";
import Playground from "../components/dashboard/board/Playground";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Board = () => {
  const { boardName } = useParams();
  const boards = useSelector((state) => state.boardReducer);
  const thisBoard = boards.boards.filter((x) => x.name === boardName);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const routeThisBoard = `http://localhost:8080/boards/${thisBoard[0]._id}`;
  const theBoard = async () => {
    const res = await axios.get(routeThisBoard);
    setData(res.data.data);
  };
  useEffect(() => {
    theBoard();
  }, []);
  return (
    <div className="board-background" style={{ backgroundColor: data.color }}>
      <Nav navColor={data.color} />
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
