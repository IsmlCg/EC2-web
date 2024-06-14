import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
