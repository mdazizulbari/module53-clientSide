import React from "react";
import { useLoaderData } from "react-router";

const Post = () => {
  const post = useLoaderData();
  console.log(post);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
