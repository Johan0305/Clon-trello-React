import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const List = ({children}) => {
    return (
        <div className="list">
            <div className="list-header">
                <h3>To do</h3>
                <a>
                    <FontAwesomeIcon icon={faEllipsis}/>
                </a>
            </div>
            <div className="list-card-container">
                {children}

            </div>
        </div>
    );
}

export default List;