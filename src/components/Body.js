import React from "react";
import "../css/Body.css";
import Intro from "./Intro";
import Team from "./Team";
import Login from "./Login";
// import Vote from "./Vote";

function Body() {
  return (
    <>
      <div className="body container-fluid">
        <Intro />
        <Team />
        <Login />
      </div>
    </>
  );
}

export default Body;
