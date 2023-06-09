import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Home from "./routes/Home";
import About from "./routes/About";
import Career from "./routes/Career";
import Posting from "./routes/Posting";
import Apply from "./routes/Apply";
import PostingDetails from "./routes/PostingDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route exact path="/postings" element={<Posting />} />
          <Route path="/postings/:postingId" element={<PostingDetails />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        {/* <Main />
          <Project />
          <Education />
          <Skill />
          <Contact /> */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
