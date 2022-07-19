import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { ACTIONS, UserContext } from "../../context/User";

const loginUser = async (user) => {
  const response = await fetch("https://test-api-0.herokuapp.com/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
export default function LoginPage() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "john@doe.com",
    password: "abc123456",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setValues({ ...values, [inputName]: inputValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(values).then((data) => {
      dispatch({ type: ACTIONS.LOG_IN_SUCCESS, user: data.user }).then(() =>
        navigate("profile")
      );
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.email}
        onChange={(e) => handleChange(e)}
        name="email"
        className="formInput"
        type="text"
        id="email"
        placeholder="email"
        required
      />
      <input
        value={values.username}
        onChange={(e) => handleChange(e)}
        className="formInput"
        name="password"
        type="password"
        id="pwd"
        placeholder="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
