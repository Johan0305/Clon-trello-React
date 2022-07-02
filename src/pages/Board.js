import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";
import Playground from "../components/dashboard/board/Playground";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLists } from "../store/reducers/List.reducer";
import ReactLoading from "react-loading";
import io from "socket.io-client";

const Board = () => {
  const { boardName } = useParams();
  const { lists, loading } = useSelector((state) => state.listReducer);
  const { theBoards } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io.connect("http://localhost:8080", {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    theBoard();
  }, []);

  const theBoard = () => {
    const res = theBoards.filter((item) => item.name === boardName);
    setData(res[0]);

    dispatch(getLists(res[0]._id));
  };

  if (data.hasOwnProperty("name")) {
    return (
      <div
        className="board-background"
        style={{
          backgroundColor: data.color,
          backgroundImage: `url("https://www.transparenttextures.com/patterns/gplay.png")`,
        }}
      >
        <Nav navColor={data.color} socket={socket} />
        <div
          onClick={() => {
            dispatch({ type: TOGGLE_ALL });
          }}
        >
          <Tools data={data} socket={socket} />
          {loading ? (
            <ReactLoading
              type="bubbles"
              color="#FFF"
              height={100}
              width={100}
            />
          ) : (
            <Playground theLists={lists} boardId={data._id} boardData={data} />
          )}
        </div>
      </div>
    );
  }
};

export default Board;
