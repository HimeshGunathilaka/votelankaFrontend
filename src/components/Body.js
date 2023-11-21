import React, { useState } from "react";
import "../css/Body.css";
import Intro from "./Intro";
import Team from "./Team";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import Navigator from "./Navigator";
// import Vote from "./Vote";

function Body() {
  const [admin, setAdmin] = useState(true);
  return (
    <>
      <div className="body container-fluid">
        <Intro />
        <Team />
        <Login />
        {admin ? <AdminPanel /> : <div></div>}
        <Navigator />
      </div>
    </>
  );
}

export default Body;
