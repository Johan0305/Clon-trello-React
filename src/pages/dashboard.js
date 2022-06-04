import Nav from "../components/dashboard/nav/Nav";
import BoardsMenu from "../components/dashboard/boards menu/BoardsMenu";
import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("/", {
        header: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        localStorage.setItem("token");
      });
  }, []);
  return (
    <div>
      <Nav />
      <div
        onClick={(event) => {
          dispatch({ type: TOGGLE_ALL });
        }}
      >
        <BoardsMenu />
      </div>
    </div>
  );
};

export default Dashboard;
