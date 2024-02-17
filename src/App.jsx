import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Marque from "./components/Marque"
import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar/>
        <Landing/>
        <Marque/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default App