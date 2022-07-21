import React, { useEffect, useState } from "react";
import {
  // useNavigate,
  Link,
} from "react-router-dom";

import useFetch from "../UseFetch";

export default function Users() {
  const [users, setUsers] = useState([]);

<<<<<<< HEAD
  // const navigate = useNavigate();
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
=======
 // const navigate = useNavigate();

  // const fetchUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // };
 const [data]= useFetch("https://jsonplaceholder.typicode.com/users")
>>>>>>> 5f437d38a684bd6f53f680e6605f145b41fb84da

 
  useEffect(() => {
    //fetchUsers();
    data && setUsers(data)
  }, [data]);

  return (
    <div>
      {users.map((item) => (
        <Link key={item.id} to={`/single-user/${item.id}`}>
          <div
          // onClick={() => navigate(`/single-user/${item.id}`)}
          >
            <h3>id: {item.id} </h3>
            <h3> username: </h3>
            {item.username}
            <h3>Company: </h3>
            {item.company.name}
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
}
