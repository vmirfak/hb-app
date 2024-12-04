
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import TimeLine from "./pages/TimeLine";
import Gallery from "./pages/Gallery";
import Congrats from "./pages/Congrats"

function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
  )
}

export default App
