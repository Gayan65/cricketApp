import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
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
