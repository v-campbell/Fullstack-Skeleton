import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ currentUser, logout, openModal }) => {
  const nav = () => (
    <div>
      {!currentUser ? (
        <div>
            <button onClick={() => openModal("LOG IN")}>
              Log In
            </button>
            <button onClick={() => openModal("SIGN UP")}>
              Sign Up
            </button>
        </div>
      ) : (
        <div>
            <Link to="/">
              Home
            </Link>
            <h1>Welcome, {currentUser.username}.</h1>
            <button onClick={logout}>
              Log out
            </button>
        </div>
      )}
    </div>
  );

  return <div>{nav()}</div>;
};

export default Nav;
