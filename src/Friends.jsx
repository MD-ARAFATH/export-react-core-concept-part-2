import "./Friends.css";
import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data); // Check the fetched data
        setFriends(data);
      });
    // .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="box">
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
    </div>
  );
}

//1. state to hold data
//2. use Effect with dependency array
//3. use fetch to load data
//4. set loaded data to the state
//5. display data on the
