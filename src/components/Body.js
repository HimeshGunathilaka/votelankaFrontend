import React from "react";
import "../css/Body.css";
import Intro from "./Intro";
import Team from "./Team";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
// import Vote from "./Vote";

function Body() {
  return (
    <>
      <div className="body container-fluid">
        <Intro />
        <Team />
        <Login />
        <AdminPanel />
      </div>
    </>
  );
}

export default Body;
