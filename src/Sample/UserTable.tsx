import React from "react";
import useUser from "./useUser";
const UserTable = () => {
  const { users, error, isLoading } = useUser();
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
