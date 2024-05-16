import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Home from "./pages/Home";
import Edite from "./pages/Edite";
import Add from "./pages/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit" element={<Edite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
