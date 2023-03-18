import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import { useParams } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
