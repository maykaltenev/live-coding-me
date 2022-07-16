import React from "react";

export default function Header({ count }) {
  return (
    <div style={{ height: "120px", border: "1px red solid" }}>
      <h5>Hello from Header </h5>
      <h2>{count}</h2>
    </div>
  );
}
