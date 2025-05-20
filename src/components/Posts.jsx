import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Posts = () => {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);
  console.log(posts);

  const handleAddPost = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const post = { title, body };
    console.log(post);
    // create post in the server
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data after post method", data);
        const newPosts = [...posts, data];
        setPosts(newPosts);
        event.target.reset();
      });
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleAddPost} action="">
          <input type="text" name="title" id="" />
          <br />
          <input type="text" name="body" id="" />
          <br />
          <input type="submit" value="Add Post" />
        </form>
      </div>

      <h2>All Posts here: {posts.length}</h2>
      {posts.map((posts) => (
        <li key={posts.id}>
          <Link to={`/posts/${posts.id}`}>{posts.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Posts;
