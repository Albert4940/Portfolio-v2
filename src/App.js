import About from "./components/About";
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import {ProjectSection as Project} from "./components/Project"

//Custom hook to get screenSize
import { useEffect} from 'react';
import { useScreenSize } from "./utils/hooks";
import GlobalStyled from "./utils/style/GlobalStyle";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {

  const {updateScreenSize} = useScreenSize();

  useEffect(() => {
    
    updateScreenSize(window.innerWidth)

    window.addEventListener('resize', () => updateScreenSize(window.innerWidth));

    // Remove event listener on component unmount to avoid memory leaks
    return () => {
      window.removeEventListener('resize', () => updateScreenSize(window.innerWidth));
    };
  },[])

  return (
    <main className="App">
      <GlobalStyled />
      <Header />
      <Welcome />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
