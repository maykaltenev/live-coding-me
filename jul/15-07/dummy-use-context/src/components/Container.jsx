import React from "react";
import List from "./List";
export default function Container({ count }) {
  return (
    <div style={{ height: "17rem", width: "100%", border: "7px solid blue" }}>
      Hello from Container Container
      <List count={count} />
    </div>
  );
}
