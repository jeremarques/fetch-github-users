import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://api.github.com/users')
      const data = await response.json();

      setUsers(data);
    }
    fetchUsers()
  }, []);

  useEffect(() => {
    const filteredUsersRepo = users.filter(user => user.login.includes(inputValue))
    setFilteredUsers(filteredUsersRepo);
  }, [inputValue])


  return (
    <>
      <input
        type="text"
        placeholder="Digite o nome de usuário"
        onChange={(e) => setInputValue(e.target.value)}
      />

      {filteredUsers.length ? (
        <ul>
          {filteredUsers?.map(filteredUser => {
            return (
              <li key={filteredUser.id}>
                <Link to={`/users/${filteredUser.login}`}>
                  <strong>{filteredUser.login}</strong>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
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
      )}
    </>
  )
}