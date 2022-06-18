import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";
import Playground from "../components/dashboard/board/Playground";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Board = () => {
  const { boardName } = useParams();
  const { theBoards } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  useEffect(() => {
    theBoard();
  });

  const theBoard = async () => {
    const res = await theBoards.filter((item) => item.name === boardName);
    setData(res[0]);
  };
  console.log(data.marked);
  return (
    <div className="board-background" style={{ backgroundColor: data.color }}>
      <Nav navColor={data.color} />
      <div
        onClick={() => {
          dispatch({ type: TOGGLE_ALL });
        }}
      >
        <Tools boardId={data._id} boardMark={data.marked} />
        <Playground />
      </div>
    </div>
  );
};

export default Board;
