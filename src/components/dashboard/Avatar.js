import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const Avatar = () => {
    return (
        <div className="avatar">
            <FontAwesomeIcon icon={faCrown}/>
        </div>
    );
}

export default Avatar;