import React from "react";
import "./ActiveLink.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ActiveLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <Link className={match ? "Active" : "none"} to={to} {...props}>
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </>
  );
};

export default ActiveLink;
