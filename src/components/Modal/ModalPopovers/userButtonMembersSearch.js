import Avatar from "../../dashboard/Avatar";
import swal from "sweetalert";
import { updateBoard } from "../../../store/reducers/Board.reducer";
import { useDispatch } from "react-redux/es/exports";

const UserButtonMembersSearch = ({ data, boardInfo }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="userButtonMembers userButtonMembersSearch"
      onClick={() => {
        dispatch(
          updateBoard(boardInfo._id, {
            ...boardInfo,
            user: [...boardInfo.user, data._id],
          })
        );
        swal("Solicitud Exitosa", `Has enviado tu tablero a ${data.name}`);
      }}
    >
      <div>
        <img src={data.picture} alt="profile-img" className="avatar1" />
      </div>
      <div className="userDescription">
        <strong>{data.name}</strong>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default UserButtonMembersSearch;
