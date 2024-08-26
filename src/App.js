import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
