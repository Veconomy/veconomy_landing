import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import banner1 from "../../../assets/banner4_prueba.png";
import rombo from "../../../assets/rombo.png";
import { InteractiveObject } from "./InteractiveObject/InteractiveObject";
import { Canvas, extend } from "react-three-fiber";
import {  OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { CameraControls } from "./InteractiveObject/CameraControls";

export const Banner = () => {

     // Custom zoom control state
 const [enableZoom, setEnableZoom] = useState(false);

  return (
    <Flex
      w="100%"
      h="42em"
      bgSize="cover"
      bgImage={banner1} 
      bgRepeat="no-repeat"
      overflow="hidden"
    >
      <Flex
        direction="column"
        h="100%"
        w="40%"
        alignItems="flex-start"
        justifyContent="center"
        backgroundSize="cover"
      >
        <Flex
          ml="14.5em"
          borderRadius="30px"
          w="13.5%"
          bg="white"
          alignItems="center"
          justifyContent="center"
        >
          <Image h="3em" src={rombo} />
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
          Economia <span style={{ color: "blue" }}>colaborativa</span>, <br />
          inclusión <span style={{ color: "blue" }}>financiera</span>
        </Heading>
        <Text mt="0.5em" ml="7em" color="black" fontSize="1.5em">
          We make digital professions <br />
          accessible and help you <br />
          master new services
        </Text>
        <Button
          ml="10em"
          _hover={{ color: "black", bg: "#00C2CB" }}
          bg="#001d45"
          color="white"
          borderRadius="30px"
          w="16em"
          h="3em"
          mt="3em"
        >
          Participar
        </Button>
      </Flex>
{/* 
      <Canvas style={{height: "100%", width: "60%" }}>
        <ambientLight intensity={10} />
      <CameraControls/>

        <InteractiveObject />
      </Canvas> */}
    </Flex>
  );
};
