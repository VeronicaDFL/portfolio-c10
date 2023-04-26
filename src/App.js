import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery/List";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <>
      <Header/>
      <About />
      <Gallery/>
      <Skill/>
      <Footer/>
     </>
  );
}

export default App;

