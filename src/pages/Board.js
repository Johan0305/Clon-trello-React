import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";
import Playground from "../components/dashboard/board/Playground";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Board = () => {
  const { boardName } = useParams();
  const theBoards = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const theBoard = () => {
    const res = theBoards.theBoards.filter((item) => item.name === boardName);
    setData(res[0]);
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
        <Tools boardId={data._id} boardMark={data.mark} />
        <Playground boardId={data._id} />
      </div>
    </div>
  );
};

export default Board;
