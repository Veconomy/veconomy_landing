import { Flex, Image, Button } from "@chakra-ui/react";
import logotipo from "../../assets/logotipo.png";
import globalizacion_logo from "../../assets/globalizacion_logo.png";
import { navbarScroll } from "../../utils/navbar-scroll";
import "./navbar.css"

export const Navbar = () => {
  navbarScroll;

  return (
    <Flex className="navbar">
      <Image h="6em" src={logotipo} />
      <Flex ml="20em" alignItems="center" w="35%" justifyContent="space-around">
        <a style={{ color: "white", fontSize: "1.2em" }} href="">
          Sobre nosotros
        </a>
        <a style={{ color: "white", fontSize: "1.2em" }} href="">
          Te ayudamos
        </a>
        <a style={{ color: "white", fontSize: "1.2em" }} href="">
          Contáctanos
        </a>
        <Button color="black" borderRadius="10px" ml="4em">
          Ingresar{" "}
        </Button>
        <Image cursor="pointer" h="2em" src={globalizacion_logo} />
      </Flex>
    </Flex>
  );
};
