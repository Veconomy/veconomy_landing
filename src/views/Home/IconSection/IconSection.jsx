import { Flex, Text, Image } from "@chakra-ui/react";
import apoyo_logo from "../../../assets/apoyo_logo.png";
import inversiones_logo from "../../../assets/inversiones_logo.png";
import globalizacion_logo from "../../../assets/globalizacion_logo.png";
import rentabilidad_logo from "../../../assets/rentabilidad_logo.png";
import "./iconSection.css";
import red_background from "../../../assets/redtecnologica.jpg";

export const IconSection = () => {
  const iconSources = [
    { img: rentabilidad_logo, stat: "100%", title: "Historias rentables" },
    {
      img: globalizacion_logo,
      stat: "15",
      title: "Conectamos con personas de otros continentes",
    },
    {
      img: rentabilidad_logo,
      stat: "100%",
      title: "Inversiones en tiempo real",
    },
    { img: apoyo_logo, stat: "100%", title: "Personas apoyadas gracias a ti" },
  ];

  return (
    <Flex
      className="icon_container"
      w="100%"
      h="30em"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Flex
        w="80%"
        h="80%"
        /* bgImage={red_background} */ bg="#4edfff"
        direction="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="30px"
      >
        <Text color="black" fontSize="2.5em">
          Súbete al tren de las oportunidades y no te quedes en el último vagón.
        </Text>
        <Text color="black" fontSize="1em">
          Conecta con nosotros y encontrarás: aquellos que busquen una
          rentabilidad y aquellos que han escrito su historia con nosotros.
        </Text>
        <Flex mt="2em" alignItems="center" justifyContent="center">
          {iconSources.map((icon) => {
            return (
              <Flex
                key={icon}
                alignItems="center"
                direction="column"
                justifyContent="center"
                w="100%"
              >
                <Image h="5em" src={icon.img} />
                <Text
                  h="1.5em"
                  color="black"
                  fontSize="2em"
                  fontWeight="bolder"
                >
                  {icon.stat}
                </Text>
                <Text
                  h="1.8em"
                  color="black"
                  fontSize="1.2em"
                  textAlign="center"
                >
                  {icon.title}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
