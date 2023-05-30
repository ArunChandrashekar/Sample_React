import React, { useEffect, useState } from "react";
import axios from "axios";
interface Users {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {users.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
