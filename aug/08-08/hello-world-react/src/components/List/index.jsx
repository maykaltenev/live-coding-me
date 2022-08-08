import React from "react";
import ListItem from "../ListItem";

function List({ list }) {
  return (
    <ul>
      {list.map((item, i) => (
        <ListItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default List;
