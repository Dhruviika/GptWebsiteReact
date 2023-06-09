import React from "react";

import {
  Footer,
  Blog,
  Possibilty,
  Features,
  Whatgpt,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "../src/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
