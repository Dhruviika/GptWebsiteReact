import React from "react";
import "./brand.css";
import { google, dropbox, shopify, slack, atlassian } from "./index";

const Brand = () => {
  return (
    <div className="brand section_padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
    </div>
  );
};

export default Brand;
