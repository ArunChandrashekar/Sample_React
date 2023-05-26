import { useState } from "react";
interface Props {
  heading: string;
  items: string[];
}
function Menu(props: Props) {
  let items = ["submenu1", "submenu2", "submenu3", "submenu4", "submenu5"];
  items = props.items;
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <h1>{props.heading}</h1>
      {items.length === 0 && <p>No Items is found in the list</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li
            className={
              activeIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
