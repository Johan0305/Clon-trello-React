import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TOGGLE_MEMBERS } from "../../store/reducers/ModalPopover.reducer";
import UserButtonMembers from "./ModalPopovers/userButtonMembers";
import PopoverModal from "./PopoverModal";

const MembersModal = ({ users }) => {
  const dispatch = useDispatch();
  const { buttonMembers } = useSelector((state) => state.modalPopoverReducer);

  return (
    <div className="container1InternalModal2">
      <div>
        <strong>Miembros</strong>
      </div>
      <div className="containerAvatarInternalModal2">
        <div>
          <span
            className="membersModal"
            onClick={() => {
              dispatch({ type: TOGGLE_MEMBERS, payload: !buttonMembers });
            }}
          >
            {users.map(({ picture, name }) => (
              <div key={name}>
                <img
                  src={picture}
                  alt={`profile-img-${name}`}
                  className="avatar1"
                />
              </div>
            ))}
          </span>
          {buttonMembers && (
            <div className="PopoverModalAvatar">
              <PopoverModal popoverTitle={"Miembros"}>
                {users.map((user) => (
                  <UserButtonMembers usersInfo={user} />
                ))}
              </PopoverModal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersModal;
