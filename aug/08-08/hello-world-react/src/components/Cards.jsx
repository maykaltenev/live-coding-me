import { Fragment, useEffect, useState } from "react";
import React from "react";

function Cards() {
  const [posts, setPosts] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch(`https://random-data-api.com/api/users/random_user?size=10%60`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
    console.log(posts);
  }, [number]);
  return (
    <React.Fragment>
      {posts.map((item) => (
        <div key={item.uid}>
          <h2>
            {item.first_name} {item.last_name}
          </h2>
          <img src={item.avatar} alt="avatar" />
        </div>
      ))}
      <button onClick={() => setNumber(number + 1)}>Load 10</button>;
    </React.Fragment>
  );
}

export default Cards;
