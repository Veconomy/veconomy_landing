import { Flex, Image, Button , Text, Link} from "@chakra-ui/react";
import logotipo from "../../assets/logotipo.png";
import globalizacion_logo from "../../assets/globalizacion_logo.png";
import { navbarScroll } from "../../utils/navbar-scroll";
import "./navbar.css"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { AnimatedButton } from "../animatedButton/AnimatedButton";

export const Navbar = () => {
  navbarScroll;

  return (
    <Flex className="navbar">
      <Image h="6em" src={logotipo} />
      <Flex ml="26em" alignItems="center" w="40%" justifyContent="space-around">
        <a className="a_navbar" style={{ color: "black", fontSize: "1.2em" }} href="">
          Sobre nosotros
        </a>
        <a className="a_navbar" style={{ color: "black", fontSize: "1.2em" }} href="">
          Te ayudamos
        </a>
        <a className="a_navbar" style={{ color: "black", fontSize: "1.2em" }} href="">
          Contáctanos
        </a>
        <Link href="https://veconomy-app.vercel.app/">
        <Button _hover={{}} className="button_navbar" bg="#001d45" color="white" borderRadius="10px" ml="4em">
          Ingresar
        </Button>
       {/*  <AnimatedButton/> */}
        </Link>
        <Flex alignItems="center"  justifyContent="center">
         <Text>ESP</Text>
          <ChevronDownIcon boxSize={10}  color="black"/> 
        </Flex>
      </Flex>
    </Flex>
  );
};
