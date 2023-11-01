import {
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Highlight,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import banner1 from "../../assets/banner4_prueba.png";
import "@splidejs/react-splide/css/skyblue";
import { CardSection } from "./CardSections/CardSection";
import { IconSection } from "./IconSection/IconSection";
import { ProyectosCard } from "./proyectos_card/ProyectosCard";
import { Footer } from "../../components/footer/Footer";
import { TypeAnimation } from "react-type-animation";
import valoresVector from "../../assets/valores_vector.png";
import vector_veconomy from "../../assets/infografico.png";
import rombo from "../../assets/rombo.png"
import { InvestmentSection } from "./InvestmentSection/InvestmentSection";


export const Home = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      alignItems="center"
      justifyContent="space-around"
    >
      <Navbar />
      <Flex
        direction="column"
        h="40em"
        w="100%"
        alignItems="flex-start"
        justifyContent="center"
        bgImage={banner1}
        backgroundSize="cover"
      >
        <Flex alignItems="center" justifyContent="center">
          <Image   ml="10em" h="3em" src={rombo}/>
        <Text fontSize="2em" color="black">
          Crowdlending
        </Text>
        </Flex>
        <Heading
          fontSize="3.5em"
          w="20em"
          color="black"
          textAlign="left"
          ml="3em"
        >
          Economia colaborativa, <br />
          inclusión financiera
        </Heading>
        <Text mt="0.5em" ml="7em" color="black" fontSize="1.5em">
          We make digital professions <br />
          accessible and help you <br />
          master new services
        </Text>
        <Button
          ml="10em"
          _hover={{ color: "white", bg: "#00C2CB" }}
          /* bg="#001d45" */
          bg="#00C2CB"
          color="black"
          borderRadius="30px"
          w="16em"
          h="3em"
          mt="3em"
        >
          Participar
        </Button>
      </Flex>
      <IconSection />
      <CardSection />
      <InvestmentSection/>
      <ProyectosCard />
      <Flex
        p="1em"
        alignItems="center"
        direction="column"
        justifyContent="center"
        w="100%"
        bg="#161D4B"
      >
        {/*  <Image src={valoresVector}/> */}
        <Text fontSize="5em" color="white">
          {" "}
          Veconomy es simple
        </Text>
        <Image h="30em" src={vector_veconomy} />
      </Flex>
      <Footer />
    </Flex>
  );
};
