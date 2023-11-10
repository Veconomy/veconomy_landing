import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiGlobe } from "react-icons/bi";
import personas_background from "../../../assets/personas_background.jpg";
import { FaUserFriends } from "react-icons/fa";
import {TfiInstagram , TfiLinkedin} from "react-icons/tfi"
import {RiTwitterXLine} from "react-icons/ri"
export const ProyectosCard = () => {
  const texts = [
    {
      id: 1,
      icon: "globo",
      title: "Comunidad global",
      text: "Únete a una comunidad que puede hacernos fuerte y útiles",
    },
    {
      id: 2,
      icon: "users",
      title: "Comunidad global",
      text: "Únete a una comunidad que puede hacernos fuerte y útiles",
    },
  ];

  return (
    <Flex
      alignItems="flex-start"
      bg="#FFFAFB"
      w="80%"
      h="100%"
      m="4em"
      border="1px solid black"
      borderRadius="50px"
    >
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        w="30%"
      >
        <span
          style={{
            height: "2em",
            marginTop: "3em",
            textAlign: "center",
            marginLeft: "2.5em",
            backgroundColor: "grey",
            width: "9em",
            borderRadius: "30px",
            color: "white",
          }}
        >
          Nuestra mision
        </span>
        <Text fontWeight="bolder" textAlign="left" ml=".7em" fontSize="3em" color="black">
          Almost is
          <br /> <span style={{ color: "blue" }}>never</span> enough
        </Text>
        <Divider m="2em 0 " orientation="horizontal" />
        <Flex
          direction="column"
          h="100%"
          alignItems="center"
          justifyContent="space-around"
        >
          {texts.map((text) => {
            return (
              <div key={text.id}>
                {" "}
                {/* Debes proporcionar una clave única para cada elemento en un bucle */}
                <Flex justifyContent="space-around">
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    bg="#001d45"
                    h="5em"
                    w="5em"
                    borderRadius="20px"
                    ml="1.5em"
                  >
                    {text.icon === "globo" ? (
                      <BiGlobe p="1em" size="3em" color="white" />
                    ) : (
                      <FaUserFriends size="3em" color="white" />
                    )}
                  </Flex>
                  <Flex  ml="2em" direction="column">
                    <Text fontSize="1.5em" fontWeight="bolder">
                      {text.title}
                    </Text>
                    <Text w="60%" fontSize="1em">{text.text}</Text>
                  </Flex>
                </Flex>
              </div>
            );
          })}

          <Button w="80%" bg="#001d45"color="white" mt="4em" borderRadius="30px" alignSelf="center">
            Ver Proyectos
          </Button>
          <Flex mt="2em" alignItems="center" justifyContent="space-around" w="70%">
              <TfiInstagram cursor="pointer" size="3em"/>
              <RiTwitterXLine cursor="pointer" size="3em"/>
              <TfiLinkedin cursor="pointer" size="3em"/>
          </Flex>
        </Flex>
      </Flex>

      <Flex w="70%">
        <Image
          h="100%"
          src={personas_background}
          borderRadius="0 50px 50px 0"
        />
      </Flex>
    </Flex>
  );
};
