import Nav from "../components/dashboard/nav/Nav";
import BoardsMenu from "../components/dashboard/boards menu/BoardsMenu";
import Popover from "../components/dashboard/Popover";
import BoardThumbnail from "../components/dashboard/nav/BoardThumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ActionButton from "../components/dashboard/ActionButton";
import Notification from "../components/dashboard/nav/Notification";
import Divider from "../components/dashboard/Divider";
import Avatar from "../components/dashboard/Avatar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <BoardsMenu />
    </>
  );
};

export default Dashboard;
