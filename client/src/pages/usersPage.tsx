import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import SearchUser from "../components/users/searchUser";
import UserList from "../components/users/userList";
import { Axios } from "../utils/axios/axios";

const UsersPage: React.FC = () => {
  const axios = new Axios();
  const location = useLocation();
  const path = location.pathname.split("/");
  const [search, setSearch] = useState<boolean>(false);
  const [allUsers, setAllUser] = useState<any>();
  const [items, setItems] = useState<any[]>([]);
  const [gender, setGender] = useState<string>("any");
  const [nat, setNat] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    axios.getLimitedUsers(parseInt(path[5]), path[1], path[2], path[3]).then((res) => {
      setAllUser(res?.data?.users);
      setItems([]);
      for (
        let number = 1;
        number <= parseInt(res?.data?.totalPages);
        number++
      ) {
        setItems((items) => [
          ...items,

          <NavLink
            onClick={() => {
              setPage(number);
            }}
            className="pagination-navlink"
            to={`/${gender}/${nat || "any"}/${name || "any"}/page/${number}`}
            activeClassName="selected-pagination-navlink"
          >
            {number}
          </NavLink>,
        ]);
      }
    });
    // eslint-disable-next-line
  }, [page, search]);

  return (
    <div className="user-page">
      <div className="list-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe maiores
        porro aliquid corrupti, ut, unde vel neque voluptas velit quasi et
        dolorem ad quia autem nesciunt minima nostrum ex nobis.
      </div>
      <SearchUser
        search={search}
        setSearch={setSearch}
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        nat={nat}
        setNat={setNat}
      />
      {allUsers && <UserList allUsers={allUsers} />}
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default UsersPage;
