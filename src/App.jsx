import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Hero from "./Pages/Hero"
import Services from "./Pages/Service"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/home" element={<Hero/>}/>
      <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
     
    </Routes>
    </BrowserRouter>


     
    </>
  )
}
export default App