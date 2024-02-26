import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
