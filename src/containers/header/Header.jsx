import React from "react";
import "./header.css";
import ai from "../../images/ai.png";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="content">
        <h1 className="text1">Let's Build something</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="email-input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started</button>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
