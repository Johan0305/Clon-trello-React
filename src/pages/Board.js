import React, { Suspense, lazy } from "react";
import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";

import Playground from "../components/dashboard/board/Playground";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLists } from "../store/reducers/List.reducer";
import ReactLoading from "react-loading";
import { Modal } from "@mantine/core";

const Board = () => {
  const { boardName } = useParams();
  const { lists, loading } = useSelector((state) => state.listReducer);
  const { theBoards } = useSelector((state) => state.boardReducer);
  const { cards } = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const theBoard = () => {
    const res = theBoards.filter((item) => item.name === boardName);
    setData(res[0]);
    dispatch(getLists(res[0]._id));
  };

  useEffect(() => {
    theBoard();
  }, []);

  if (data.hasOwnProperty("name")) {
    return (
      <div className="board-background" style={{ backgroundColor: data.color }}>
        <Nav navColor={data.color} />
        <Modal opened={true}>{}</Modal>
        <div
          onClick={() => {
            dispatch({ type: TOGGLE_ALL });
          }}
        >
          <Tools data={data} />
          {loading ? (
            <ReactLoading
              type="bubbles"
              color="#FFF"
              height={100}
              width={100}
            />
          ) : (
            <Playground theLists={lists} boardId={data._id} cards={cards} />
          )}
        </div>
      </div>
    );
  }
};

export default Board;
