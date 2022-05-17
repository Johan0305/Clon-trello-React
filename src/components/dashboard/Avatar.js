import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Avatar = () => {
    return (
        <div className="avatar">
            <Link to="/profile">
            <FontAwesomeIcon icon={faCrown}/>
            </Link>
        </div>
    );
}

export default Avatar;