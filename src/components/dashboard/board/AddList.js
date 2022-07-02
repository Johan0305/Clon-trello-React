import ActionButton from "../ActionButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const AddList = () => {
    return (
        <div className="add-list">
            <div className="add-list-input">
                <input type="text"/>
            </div>
            <div className="add-list-actions">
                <ActionButton label={"Añadir lista"} styleName={"add-list-button"}/>
                <a>
                    <FontAwesomeIcon icon={faClose}/>
                </a>
            </div>
        </div>
    );
}

export default AddList;