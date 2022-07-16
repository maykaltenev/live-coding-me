import React from "react";

export default function Card({ count }) {
  return (
    <div style={{ border: "3px violet solid", height: "60px" }}>
      <h2>Card</h2>
      <h6>count={count}</h6>
    </div>
  );
}
