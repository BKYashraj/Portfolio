import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>

    <SocialLinks/>
   </div>
  );
}

export default App;
