import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import TeamPlayers from "./components/TeamPlayers";
import EditPlayer from "./components/EditPlayer";
import AllTeam from "./components/AllTeam";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/team" element={<TeamPlayers />}></Route>
          <Route path="/player/edit" element={<EditPlayer />}></Route>
          <Route path="/teams" element={<AllTeam />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
