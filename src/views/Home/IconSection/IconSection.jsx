import {
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import apoyo_logo from "../../../assets/apoyo_logo.png";
import inversiones_logo from "../../../assets/inversiones_logo.png";
import globalizacion_logo from "../../../assets/globalizacion_logo.png";
import rentabilidad_logo from "../../../assets/rentabilidad_logo.png";

export const IconSection = () => {
  const iconSources = [
    { img: rentabilidad_logo, stat: "100%", title: "Historias rentables" },
    {
      img: globalizacion_logo,
      stat: "15",
      title: "Conectamos con personas de otros continentes",
    },
    {
      img: inversiones_logo,
      stat: "100%",
      title: "Inversiones en tiempo real",
    },
    { img: apoyo_logo, stat: "100%", title: "Personas apoyadas gracias a ti" },
  ];

  return (
    <Flex

      bg="#FFFAFB"
      w="100%"
      h="10em"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {/* <Text fontSize="2em">
        Súbete al tren de las oportunidades y no te quedes en el último vagón.
      </Text>
      <Text fontSize="1em">
        Conecta con nosotros y encontrarás: aquellos que busquen una
        rentabilidad y aquellos que han escrito su historia con nosotros.
      </Text> */}
      <Flex alignItems="center" justifyContent="center">
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
              <Text h="1.5em" fontSize="2em" fontWeight="bolder">
                {icon.stat}
              </Text>
              <Text h="1.8em" fontSize="1.2em" textAlign="center">
                {icon.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
