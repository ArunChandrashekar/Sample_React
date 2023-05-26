import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Dynamic List</h1>
      {items.length === 0 && <p>No Items is found in the list</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
