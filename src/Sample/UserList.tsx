import React, { useEffect, useState } from "react";
import axios from "axios";
interface Users {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setErrors] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/u sers")
      //success of APi Call
      .then((res) => setUsers(res.data))
      //if any error or failed the APi call to the Server
      .catch((err) => {
        setErrors(err.message);
      });
  }, []);
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {users.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
