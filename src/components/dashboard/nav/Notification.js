import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Notification = ({children}) => {
    return (
        <div className="notification">
            {children}
            <a>
                <FontAwesomeIcon icon={faCheck}/>
            </a>
        </div>
    );
}

export default Notification;