

import NavLogo from './NavLogo';
import ActionButton from '../ActionButton';
import Avatar from '../Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <nav>
        <div className="nav-left">
            <NavLogo/>
            
            <div className="nav-option">
                <a>
                    Reciente
                    <FontAwesomeIcon icon={faAngleDown}/>
                </a>
            </div>
            <div className="nav-option">
                <a>
                    Marcado
                    <FontAwesomeIcon icon={faAngleDown}/>
                </a>
            </div>
            <ActionButton styleName={"action-button nav-button-create"} label={"Crear"}/>
        </div>
        <div className="nav-right">
            <div className="nav-search">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <form>
                    <input type="text" placeholder="Buscar..."></input>
                </form>
            </div>
            <div className="nav-notifications">
                <a className="nav-notifications-icon">
                    <FontAwesomeIcon icon={faBell}/>
                </a>
            </div>
            <div className="nav-avatar">
                <Avatar/>
            </div>
        </div>
    </nav>
    );
}

export default Navigation;