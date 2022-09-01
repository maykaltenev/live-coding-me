import React, { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.placeholder]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhot:5000/api/signup/1", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          username:
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            required
          ></input>
        </div>
        <div>
          email:
          <input
            onChange={handleChange}
            type="email"
            placeholder="email"
            required
          ></input>
        </div>
        <div>
          password:
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            required
          ></input>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
}
