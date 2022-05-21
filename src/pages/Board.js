import Nav from "../components/dashboard/nav/Nav";
import Tools from "../components/dashboard/board/Tools";
import Playground from "../components/dashboard/board/Playground";



const Board = () => {
    return (
        <div className="board-background">

            <Nav/>
            <Tools/>
            <Playground/>
         
            
        </div>
    );
}

export default Board;