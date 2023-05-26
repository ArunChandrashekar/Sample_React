import { MouseEvent } from "react";
function Menu() {
  let items = ["submenu1", "submenu2", "submenu3", "submenu4", "submenu5"];
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
export default Menu;
