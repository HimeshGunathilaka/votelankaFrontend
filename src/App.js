import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink as link } from "react-router-hash-link";
import Team from "./components/Team";
import AdminPanel from "./components/AdminPanel";
import Vote from "./components/Vote";

function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid">
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
