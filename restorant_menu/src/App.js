import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Item from "./Item";
import NotFound from "./NotFound";
import About from "./About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
