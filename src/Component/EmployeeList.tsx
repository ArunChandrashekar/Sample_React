import React, { useEffect, useState } from "react";
const EmployeeList = () => {
  const [name, setName] = useState<string[]>([]);
  useEffect(() => {
    console.log("Read data from API");
    setName(["Rana", "Kumar"]);
  }, []);
  return (
    <div>
      <p>Employee List</p>
      {name}
    </div>
  );
};
export default EmployeeList;
