import React, { useState } from "react";
import "../css/Body.css";
import Intro from "./Intro";
import Team from "./Team";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
// import Vote from "./Vote";

function Body() {
  const [admin, setAdmin] = useState(false);
  return (
    <>
      <div className="body container-fluid">
        <Intro />
        <Team />
        <Login />
        {admin ? <AdminPanel /> : <div></div>}
      </div>
    </>
  );
}

export default Body;
