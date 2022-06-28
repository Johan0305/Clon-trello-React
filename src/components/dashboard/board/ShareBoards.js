import IconButton from "../IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faStar,
  faEllipsisV,
  faClose,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Popover from "../Popover";
import Divider from "../Divider";
import axios from "axios";
import UserButtonMembersSearch from "../../Modal/ModalPopovers/userButtonMembersSearch";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const ShareBoards = ({ boardInfo }) => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState([]);
  const [search, setSearch] = useState("");

  ls.config.encrypt = true;
  ls.config.secret = "secret-string";

  ls.config.encrypter = (data, secret) =>
    AES.encrypt(JSON.stringify(data), secret).toString();

  ls.config.decrypter = (data, secret) => {
    try {
      return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
    } catch (e) {
      return data;
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setUsersFilter(
      users.filter((data) => {
        if (search === "") {
          return data.email;
        } else if (data.email.includes(search.toLowerCase())) {
          return data.email;
        }
      })
    );
  }, [search]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/users");
      const usersFilter = data.data.filter(({ email }) => {
        return !(email === ls.get("email"));
      });
      setUsers(usersFilter);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        className="buttonShare"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IconButton styleName={"tools-button-add"}>
          <FontAwesomeIcon icon={faUserPlus} />
          Compartir
        </IconButton>
      </div>
      {open === true && (
        <div className="popover shareButton">
          <div className="popover-header">
            <p>Compartir con:</p>
            <span
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
          </div>
          <Divider />
          {
            <div>
              <div className="nav-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
              {usersFilter.length === 0 || usersFilter.length > 8 ? (
                search === "" ? (
                  <p className="phrase-search">
                    Busca por su email a la persona que quieres en tu equipo
                  </p>
                ) : (
                  <p className="phrase-search"> Usuario no encontrado</p>
                )
              ) : (
                usersFilter.map((data) => {
                  return (
                    <UserButtonMembersSearch
                      data={data}
                      boardInfo={boardInfo}
                    />
                  );
                })
              )}
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default ShareBoards;
