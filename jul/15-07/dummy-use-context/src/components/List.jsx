import React from "react";
import Card from "./Card";
export default function List({ count }) {
  return (
    <div style={{ border: "3px green solid", height: "90%" }}>
      Hello from List
      <Card count={count} />
      <Card count={count} />
      <Card count={count} />
    </div>
  );
}
