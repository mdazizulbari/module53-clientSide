import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <Link to={"/posts"}>Posts</Link>
    </div>
  );
};

export default Header;
