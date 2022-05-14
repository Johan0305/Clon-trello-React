import BoardTile from "./BoardTile";
import AddBoard from "./AddBoard";

const BoardsUser = () => {
    return (
        <div className="boards-user">
            <BoardTile boardName={"GTA"}/>
            <BoardTile boardName={"Soccer"}/>
            <AddBoard/>
        </div>
    );
}

export default BoardsUser;