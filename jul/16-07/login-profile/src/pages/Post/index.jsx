import { useContext } from "react";
import { UserContext } from "../../context/User";
import React from "react";

export default function PostPage() {
  const { state } = useContext(UserContext);
  return (
    <div>
      {state.user.posts.map((post) => (
        <>
          <div key={post.id}>{post.title}</div>
          <hr />
        </>
      ))}
    </div>
  );
}
