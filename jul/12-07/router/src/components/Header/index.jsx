import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("about");
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "yellow" } : undefined;
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <button onClick={handleNavigate}> Send to about page</button>
      </ul>
    </nav>
  );
}
