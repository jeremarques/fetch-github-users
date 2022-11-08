import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://api.github.com/users')
      const data = await response.json();
      
      setUsers(data);
    }
    fetchUsers()
  }, []);

  return (
    <ul>
      {users?.map(user => {
        return (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>
              <strong>{user.login}</strong>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}