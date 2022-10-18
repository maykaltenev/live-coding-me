import { Link } from "react-router-dom";

export default function PublicNavigation() {
  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </>
  );
}
