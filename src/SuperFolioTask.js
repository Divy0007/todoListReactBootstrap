import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import MyService from "./components/MyService";

const SuperFolioTask = () => {
  return (
    <>
      <div className="container-sm mt-1">
        <Navbar />
      </div>
      <hr />
      <Content />
      <MyService />
    </>
  );
};

export default SuperFolioTask;
