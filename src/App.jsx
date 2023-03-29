import FacebookPosts from "./components/FacebookPosts"
import Footer from "./components/Footer"
import Form from "./components/Form"
import GoogleMaps from "./components/GoogleMaps"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Departamentos from "./components/Departamentos"



function App() {
  return (
    <>
    <NavBar />
    <Home />
    <Departamentos />
    <FacebookPosts />
    <Form />
    <GoogleMaps />
    <Footer />
    </>
  )
}

export default App