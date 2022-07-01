import Nav from "../components/dashboard/nav/Nav";
import BoardsMenu from "../components/dashboard/boards menu/BoardsMenu";

import { TOGGLE_ALL } from "../store/reducers/Nav.reducer";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="dashboard-background">
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
