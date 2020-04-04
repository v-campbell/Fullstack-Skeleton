import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ currentUser, logout, openModal }) => {
  const nav = () => (
    <div>
      {!currentUser ? (
        <div>
            <button onClick={() => openModal("LOG IN")}>
              LOGIN
            </button>
            <button onClick={() => openModal("SIGN UP")}>
              SIGNUP
            </button>
        </div>
      ) : (
        <div>
            <Link to="/">
              Home
            </Link>
            <h1>Welcome, {currentUser.first}.</h1>
            <div onClick={logout}>
              LOG OUT
            </div>
        </div>
      )}
    </div>
  );

  return <div>{nav()}</div>;
};

export default Nav;
