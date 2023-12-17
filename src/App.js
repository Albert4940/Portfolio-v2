import About from "./components/About";
import Header from "./components/Header"
import Welcome from "./components/Welcome"

//Custom hook to get screenSize
import { useEffect} from 'react';
import { useScreenSize } from "./utils/hooks";

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
      <Header />
      <Welcome />
      <About />
    </main>
  );
}

export default App;
