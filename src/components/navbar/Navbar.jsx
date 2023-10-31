import { Flex, Image, Button } from "@chakra-ui/react";
import logotipo from "../../assets/logotipo.png";
import globalizacion_logo from "../../assets/globalizacion_logo.png";
import { navbarScroll } from "../../utils/navbar-scroll";
import "./navbar.css"
import { ChevronDownIcon } from '@chakra-ui/icons'

export const Navbar = () => {
  navbarScroll;

  return (
    <Flex className="navbar">
      <Image h="6em" src={logotipo} />
      <Flex ml="26em" alignItems="center" w="40%" justifyContent="space-around">
        <a className="a_navbar" style={{ color: "white", fontSize: "1.2em" }} href="">
          Sobre nosotros
        </a>
        <a className="a_navbar" style={{ color: "white", fontSize: "1.2em" }} href="">
          Te ayudamos
        </a>
        <a className="a_navbar" style={{ color: "white", fontSize: "1.2em" }} href="">
          Contáctanos
        </a>
        <Button color="black" borderRadius="10px" ml="4em">
          Ingresar{" "}
        </Button>
        <Flex alignItems="center"  justifyContent="center">
          <Image cursor="pointer" h="2em" src={globalizacion_logo} />
          <ChevronDownIcon boxSize={10}  color="white"/> 
        </Flex>
      </Flex>
    </Flex>
  );
};
