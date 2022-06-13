import IconButton from "../IconButton";
import Separator from "../Separator";
import Avatar from "../Avatar";
import ActionButton from "../ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faStar,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Tools = () => {
  const [boardName, setBoardName] = useState("Call of Dutty");
  return (
    <div className="tools-bar">
      <div className="tools-boardName">
        <form>
          <input
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
        </form>
      </div>
      <IconButton styleName={"tools-button-fav"}>
        <FontAwesomeIcon icon={faStar} />
      </IconButton>
      <Separator />
      <Avatar id={1} />
      <IconButton styleName={"tools-button-add"}>
        <FontAwesomeIcon icon={faUserPlus} />
        Compartir
      </IconButton>
      <ActionButton
        styleName={"action-button tools-button-filter"}
        label={"Filtrar"}
      />
      <IconButton styleName={"tools-button-more"}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
    </div>
  );
};

export default Tools;
