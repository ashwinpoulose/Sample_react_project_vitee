import React, { useState } from "react";

interface Props {
  heading: string;
  items: string[];
}

function ListGroup(props: Props) {
  const [active, setActive] = useState(-1);
  //items = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No items is found in the list</p>}
      <ul className="list-group">
        {props.items.map((x, index) => (
          <li
            key={x}
            className={`list-group-item ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

// function ListGroup(props: Props) {
//   return <h1>{props.heading}</h1>;
// }
export default ListGroup;
