import FacebookPosts from "./components/FacebookPosts"
import Footer from "./components/Footer"
import Form from "./components/Form"
import GoogleMaps from "./components/GoogleMaps"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Departamentos from "./components/Departamentos"
import { Route, Routes } from "react-router"
import Nosotros from "./components/Nosotros"



function App() {
  return (
    <>
    <Routes>
    <NavBar />
      <Route path="/" element={<Home />}  />
      <Route path="/nosotros" element={<Nosotros/>} />
    </Routes>
  
    <Footer />
    </>
  )
}

export default App