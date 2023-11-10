import { Flex, Text } from "@chakra-ui/react";
import { InvestmentCard } from "./InvestmentCard/InvestmentCard";
import investment_background from "../../../assets/backprueba.svg"
import { Canvas } from "react-three-fiber";
import { InteractiveObject } from "../Banner/InteractiveObject/InteractiveObject";
import { extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CameraControls } from "../Banner/InteractiveObject/CameraControls";
 
extend({ OrbitControls })
export const InvestmentSection = () => {
  return (
    <Flex w="100%" h="40em" /* bgImage={investment_background}  */ bg="#001d45"  alignItems="center" justifyItems="center">
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        w="70%"
      >
        <Text textAlign="center" mb="1em"  fontSize="2em" color="white" fontWeight="bold">
          Socios de un éxito para un <br/> alto beneficio mutuo de alto <br />{" "}
          impacto social.
        </Text>
        <iframe
          width="700"
          height="315"
          src="https://www.youtube.com/embed/UQV7z3enafA"
          title="Video de YouTube"
          allowFullScreen
        ></iframe>
      </Flex>
      <Canvas style={{cursor:"pointer", height: "100%", width: "60%" }}>
        <ambientLight intensity={10} />
       <CameraControls/> 
      
        <InteractiveObject />
      </Canvas>
    {/*   <InvestmentCard/> */}
    </Flex>
  );
};
