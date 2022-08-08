import React from "react";

function ListItem({ i, item }) {
  return <li key={i}>{item}</li>;
}

export default ListItem;
