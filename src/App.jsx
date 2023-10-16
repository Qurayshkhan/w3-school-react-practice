import { useState } from "react";
import Es6Component from "./Components/Es6Component";
import Form from "./Components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import UseStateHook from "./Components/Pages/Hooks/UseStateHook";

function App() {
  const [count, setCount] = useState(0);
  const title = { name: "Ford", model: "Mustang" };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/use-state-hook" element={<UseStateHook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
