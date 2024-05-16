import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Home from "./pages/Home";
import Edite from "./pages/Edite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edite" element={<Edite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
