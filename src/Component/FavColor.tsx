import { useState } from "react";
function FavColor() {
  const [color, setColor] = useState("Red");
  var changeColor = () => {
    if (color === "Red") setColor("Yellow");
    else setColor("Red");
  };
  return (
    <div>
      My Fav Color is {color}
      <button onClick={() => changeColor()}>Change Color</button>
    </div>
  );
}
export default FavColor;
