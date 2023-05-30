import React, { useEffect } from "react";
import axios from "axios";

const UserList = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    });
  });
  return <div></div>;
};

export default UserList;
