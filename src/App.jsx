import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
