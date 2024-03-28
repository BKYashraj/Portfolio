import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <About/>

    <SocialLinks/>
   </div>
  );
}

export default App;
