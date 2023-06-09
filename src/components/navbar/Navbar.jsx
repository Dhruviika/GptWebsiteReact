import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#wgpt">What is GPT?</a>
        </p>
        <p>
          <a href="#possibilty">Open AI</a>
        </p>
        <p>
          <a href="#features">Case Studies</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </div>
      <div className="sign-in">
        <p>sign in</p>
        <button type="button">Sign In</button>
      </div>
      <div className="sign-up">
        <p>Sign up</p>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
