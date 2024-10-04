import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>Users : {users.length}</h2>
    </div>
  );
}

//1.declear a state to hold the data
//2.useEffect with call back and dependency array
//3.use fetch to load data
