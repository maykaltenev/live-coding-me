import React, { useContext } from "react";
import { Context } from "./context";

export default function Form() {
  const { setData } = useContext(Context);
  const handelSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch("https://test-api-0.herokuapp.com/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        console.log(data);
        // navigate("/profile");
      });
  };
  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   };
  //   fetch("https://test-api-0.herokuapp.com/login", {
  //     method: "POST",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // setData(data.user);
  //       console.log(data);
  //     });
  // };
  return (
    <form onSubmit={(e) => handelSubmit(e)}>
      <h1>My Form</h1>
      <label>Email:</label>
      <input type="text" id="email" name="email" required />
      <label>Password:</label>
      <input type="password" id="pwd" name="pwd" required />
      <button type="submit">Submit</button>
    </form>
  );
}
