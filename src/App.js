import Contact from "./components/Contact";
import Body from "./components/Body"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
          <Router basename="/react_portfolio">
      <Routes>
      <Route path="/" element={<Body/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
    </div>

  )
}


