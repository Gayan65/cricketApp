import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import TeamPlayers from "./components/TeamPlayers";

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/team" element={<TeamPlayers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
