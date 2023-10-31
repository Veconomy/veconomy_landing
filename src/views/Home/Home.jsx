import { Flex, Image ,Text, Heading, Button, Highlight } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import banner1 from "../../assets/banner1.jpg";
import "@splidejs/react-splide/css/skyblue";
import { CardSection } from "./CardSections/CardSection";
import { IconSection } from "./IconSection/IconSection";
import { ProyectosCard } from "./proyectos_card/ProyectosCard";
import { Footer } from "../../components/footer/Footer";
import { TypeAnimation } from "react-type-animation";
import valoresVector from "../../assets/valores_vector.png"
import vector_veconomy from "../../assets/vector_veconomy.png"



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
        alignItems="center"
        justifyContent="center"
        bgImage={banner1}
        backgroundSize="cover"
      >
        {/* <Heading fontSize="3.5em" w="20em" color="white" textAlign="center">
          Economia colaborativa, <br />
          inclusión financiera
        </Heading> */}
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `Economia colaborativa ,inclusión financiera`,
        5000, 
        "Economia colaborativa,inclusión global",
        5000,
        "Economia colaborativa,inclusión selectiva",
        5000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3.5em', width:"15em" , color:"white",textAlign:"center", display: 'inline-block' }}
      repeat={Infinity}
    />
        <Button _hover={{color:"black" , bg:"#00C2CB"}} bg="#001d45" color="white" borderRadius="30px"  w="16em" h="3em" mt="3em">
          Participar
        </Button>
      </Flex>
      <IconSection/>
      <CardSection />
      <ProyectosCard/>
      <Flex alignItems="center" justifyContent="center" w="100%" bg="#161D4B">
        <Image src={valoresVector}/>
        <Image src={vector_veconomy}/>
      </Flex>
      <Footer/>
    </Flex>
  );
};
