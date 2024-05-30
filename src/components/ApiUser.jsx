import React, { useEffect, useState } from "react";

function ApiUser() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
      
  }, []);
  const Users = (props) =>{
    return(
      <ul className="todo-list">
        {props.users.map((user, index)=> <li key={index}>{user.name}</li>)}
      </ul>
    )
  }
  return (
    <>
      <h1 style={{ fontWeight: 200 }}>Users API List</h1>
      <p>Users are fetched using <a href="https://jsonplaceholder.typicode.com/users">API</a></p>
      {users && <Users users = {users}/>}
    </>
  );
}

export default ApiUser;
