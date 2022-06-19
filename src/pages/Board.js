import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";
import Playground from "../components/dashboard/board/Playground";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Board = () => {
  const { boardName } = useParams();
  const { theBoards, loading } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  console.log(loading);

  useEffect(() => {
    theBoard();
  });

  const theBoard = async () => {
    const res = await theBoards.filter((item) => item.name === boardName);
    setData(res[0]);
  };

  return (
    <div className="board-background" style={{ backgroundColor: data.color }}>
      <Nav navColor={data.color} />
      <div
        onClick={() => {
          dispatch({ type: TOGGLE_ALL });
        }}
      >
        <Tools data={data} />
        <Playground />
      </div>
    </div>
  );
};

export default Board;
