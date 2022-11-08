import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { idName } = useParams();
  const [userFetched, setUserFetched] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${idName}`)
      .then(response => response.json())
      .then(data => setUserFetched(data))
  }, [])

  return (
    <>
      <strong>User: {userFetched.name}</strong><br />
      <strong>Username: {userFetched.login}</strong><br />
      <strong>Id: {userFetched.id}</strong><br />
      <strong>Location: {userFetched.location}</strong><br />
      <strong>Bio: {!userFetched.bio ? <span>null</span> : userFetched.bio}</strong><br />
      <strong>GitHub Profile: <a href={userFetched.html_url} target='_blank'>{userFetched.html_url}</a></strong>
    </>
  )
}