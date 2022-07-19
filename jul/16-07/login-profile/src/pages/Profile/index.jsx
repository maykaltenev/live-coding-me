import { useContext } from "react";
import { ACTIONS, UserContext } from "../../context/User";
import { Link } from "react-router-dom";
export default function ProfilePage() {
  const { state, dispatch } = useContext(UserContext);
  const handleChangeUsername = (e) => {
    dispatch({ type: ACTIONS.UPDATE_USERNAME, username: e.target.value });
  };
  return (
    <div>
      <h3>Username</h3>
      <p>{state.user.username}</p>
      <hr />
      <h3>Email</h3>
      <p>street: {state.user.address.street}</p>
      <p>city: {state.user.address.city}</p>
      <hr />
      <Link to={"/posts"}>Go to posts</Link>
    </div>
  );
}
