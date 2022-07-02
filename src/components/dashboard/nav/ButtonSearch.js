import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_SEARCH, TOGGLE_ALL } from "../../../store/reducers/Nav.reducer";
import toast from "react-hot-toast";
import Divider from "../Divider";
import BoardThumbnail from "./BoardThumbnail";
import axios from "axios";

const ButtonSearch = () => {
  const [boards, setBoards] = useState([]);
  const [boardsFilter, setBoardsFilter] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { buttonSearch } = useSelector((state) => state.navReducer);

  useEffect(() => {
    getBoards();
    setBoardsFilter(
      boards.filter((data) => {
        if (search === "") {
          return data.name;
        } else if (data.name.includes(search)) {
          return data.name;
        }
      })
    );
  }, [search]);

  const getBoards = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL_BACK}/boards`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const boardsFilter = data.data.filter(({ name }) => {
        return name;
      });
      setBoards(boardsFilter);
    } catch (err) {
      toast.error("No pudimos encontrar los tableros, inténtalo más tarde.");
    }
  };

  return (
    <div className="container-buttonSearchNav">
      <div className="nav-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onClick={(event) => {
            dispatch({ type: TOGGLE_SEARCH, payload: !buttonSearch });
          }}
        ></input>
      </div>
      {buttonSearch === true && (
        <div className="popover popover-buttonSearchNav">
          <div className="popover-header">
            <p>Encuentra tus tableros:</p>
            <span
              onClick={(event) => {
                dispatch({ type: TOGGLE_ALL });
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
          </div>
          <Divider />
          {search === "" ? (
            <p className="phrase-search">Busca por nombre tu tablero</p>
          ) : boardsFilter.length === 0 || boardsFilter.length > 8 ? (
            <p className="phrase-search"> Tablero no encontrado</p>
          ) : (
            boardsFilter.map((data) => {
              return (
                <Link key={data._id} to={`/board/${data.name}`}>
                  <div className="popover-option">
                    <div className="popover-option-board">
                      <BoardThumbnail color={data.color} />
                      <h3>{data.name}</h3>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default ButtonSearch;
