import { useState } from "react";
function FavColor() {
  const [color, setColor] = useState("red");
  // const color="Green"
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}

export default FavColor;
