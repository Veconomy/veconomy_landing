import { Button, Flex, Text } from "@chakra-ui/react";
import inversores_card from "../../../assets/inversores-card.png";
import nosotros_card from "../../../assets/nosotros-card.png";
import emprendedores_card from "../../../assets/emprendedores-card.png";
import "./cardSection.css";
export const CardSection = () => {
  const cards = [
    {
      img: nosotros_card,
      title: "Sobre nosotros",
      sub: "Iniciativas sociales ,innovación y transparencia",
    },
    {
      img: emprendedores_card,
      title: "Ayuda a emprendedores",
      sub: "Economía colaboratíva, fácil financiación.",
    },
    {
      img: inversores_card,
      title: "Nuestros inversores",
      sub: "Colaboración solidaria, proyectos con propósito.",
    },
  ];

  return (
    <Flex
      w="100%"
      h="40em"
      pt="2em"
      //bg="#FFFAFB"
      //bg="#001d45"
      alignItems="center"
      justifyContent="center"
    >
      {cards.map((card) => {
        return (
          <Flex
            className="animate__animated animate__animated cardSection"
            filter="saturate(50%)"
            direction="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="50px"
            m="2em"
            bgImage={card.img}
            bgSize="cover"
            h="30em"
            w="29em"
            style={{ position: "relative" }}
          >
           
            <Text fontSize="2em" color="white">
              {card.title}
            </Text>
            <Text fontSize="1em" color="white">
              {card.sub}
            </Text>
            <Button mt="4em">Conocer más</Button>
          </Flex>
        );
      })}
    </Flex>
  );
};
