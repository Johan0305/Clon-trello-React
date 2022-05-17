import BoardThumbnail from "../dashboard/nav/BoardThumbnail";

const AboutProfile = () => {
    return(
        <div className="aboutProfile">
            <p className="aboutProfile-about"><strong>Acerca de</strong></p>
            <hr></hr>
            <p>Nombre de usuario:</p>
            <input className="aboutProfile-inputuser" type="text"></input>
            <p>Correo electrónico:</p>
            <input className="aboutProfile-email" type="email"></input>
            <p>Biografía:</p>
            <textarea className="aboutProfile-textareaBio"></textarea>
            <div className="aboutprofile-recentBoards" >
                <p>Tableros Recientes</p>
                <div className="popover-option">
                    <div className="popover-option-board">
                        <BoardThumbnail/>
                        <h3>Clonando Trello</h3>
                    </div>
                </div>
                <div className="popover-option">
                    <div className="popover-option-board">
                        <BoardThumbnail/>
                        <h3>Rpg Game</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProfile;