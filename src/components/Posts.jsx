import React from "react";
import { Link, useLoaderData } from "react-router";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
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
