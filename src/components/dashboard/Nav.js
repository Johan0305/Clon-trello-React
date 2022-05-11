import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return(
        <nav>
            <div className="nav-left">
                <figure className="nav-logo">
                    <img src="" alt=""/>
                </figure>
                <div className="nav-option">
                    <a>Reciente</a>
                </div>
                <div className="nav-option">
                    <a>Marcado</a>
                </div>
                <div className="nav-button-create">
                    <a>Crear</a>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav-search">
                    <form>
                        <input type="text" placeholder="Buscar"></input>
                    </form>
                </div>
                <div className="nav-notifications">
                    <a>
                        <FontAwesomeIcon icon={faCoffee}/>
                    </a>
                </div>
                <div className="nav-avatar">
                    <a></a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;