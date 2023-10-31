import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./views/Home/Home";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import 'animate.css';


function App() {
  return (
    <ParallaxProvider>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </ParallaxProvider>
  );
}

export default App;
