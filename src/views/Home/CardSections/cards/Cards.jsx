import { Box, Button, Flex, Text } from "@chakra-ui/react";

import inversores_card from "../../../../assets/card_inversores.webp";
import nosotros_card from "../../../../assets/nosotros_card.jpg";
import emprendedores_card from "../../../../assets/emprendedores_card.jpg";

export const Cards = () => {
  const cards = [
    {
      id:1,
      img: nosotros_card,
      title: "Sobre nosotros",
      sub: "Iniciativas sociales ,innovación y transparencia",
    },
    {
      id:2,
      img: emprendedores_card,
      title: "Ayuda a emprendedores",
      sub: "Economía colaboratíva, fácil financiación.",
    },
    {
      id:3,
      img: inversores_card,
      title: "Nuestros inversores",
      sub: "Colaboración solidaria, proyectos con propósito.",
    },
    {
      id:3,
      img: inversores_card,
      title: "Nuestros inversores",
      sub: "Colaboración solidaria, proyectos con propósito.",
    },
  ];
  return (
    <Flex
      w="100%"
      h="30em"
      cursor="pointer"
      //bg="#FFFAFB"
      //bg="#001d45"
      alignItems="center"
      justifyContent="center"
    >
      {cards.map((card) => {
        return (
          <Flex
          key={card.id}
          className="cardContainer"
          filter="saturate(50%)"
          direction="column"
          alignItems="center"
          justifyContent="flex-end"
          borderRadius="20px"
          m="0 1em"
          bgImage={card.img}
          bgSize="cover"
          h="20em"
          w="20em"
        >
          <Flex
            className="cardText_container"
            h="3em"
            direction="column"
            alignItems="center"
            justifyContent="center"
            bg="#FFFAFB"
            w="100%"
            borderRadius="0 0 20px 20px"
          >
            <Text fontSize="1.5em" fontWeight="bold" textAlign="center" color="black">
              {card.title}
            </Text>
            <Text className="cardText" textAlign="center" display="none" fontSize="1em" color="black">
              {card.sub}
            </Text>
          </Flex>
        </Flex>
        );
      })}
    </Flex>
  );
};
