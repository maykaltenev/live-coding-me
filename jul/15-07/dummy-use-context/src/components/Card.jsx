import React from "react";
import { useContext } from "react";
import { Context } from "./context/countContext";
export default function Card() {
  const { count } = useContext(Context);
  return (
    <div style={{ border: "3px violet solid", height: "60px" }}>
      <h2>Card</h2>
      <h6>count={count}</h6>
    </div>
  );
}
