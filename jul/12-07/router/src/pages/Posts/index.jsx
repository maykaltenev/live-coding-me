import React from "react";
import Link from "react-router-dom";
export default function PostsPage() {
  return (
    <div>
      These are the posts:
      <p>Post one</p>
      <p>Post two</p>
      <Link to={"/posts/new"}>Create a new post</Link>
      <Link to={"new"}>Create a new post</Link>
    </div>
  );
}
