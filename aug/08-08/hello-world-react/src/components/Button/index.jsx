import React from "react";

function Button({ handleClick, name }) {
  return <button handleClick={handleClick}>{name}</button>;
}

export default Button;
