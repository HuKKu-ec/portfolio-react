
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Headers from "./components/Header";
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';


function App() {
  return (
    <div>
    
      <BrowserRouter>

        <Headers />
        <div style={{ margin: 25 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
        </div>
      </BrowserRouter></div>
  );
}

export default App;
