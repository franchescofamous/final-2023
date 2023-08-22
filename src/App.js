import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Acceuill from "./Components/Pages/Acceuill/Acceuill";
import Cours from "./Components/Pages/Cours/Cours";
import Stream from "./Components/Pages/Stream/Stream";
function App() {
  let [extrait, setExtrait] = useState("bla bla bla");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Acceuill />} />
          <Route path="cours" element={<Cours extrait={extrait} />} />
          <Route path="stream" element={<Stream />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
