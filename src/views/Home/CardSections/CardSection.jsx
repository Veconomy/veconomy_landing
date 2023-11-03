import { Button, Center, Divider, Flex, Text } from "@chakra-ui/react";
import "./cardSection.css";
import { Cards } from "./cards/Cards";
export const CardSection = () => {
  return (
    <Flex
      direction="column"
      pt="3em"
      alignItems="center"
      justifyContent="center"
      bg="#FFFAFB"
      w="100%"
    >
      <Flex alignItems="center" w="100%" justifyContent="center">
        <Flex direction="column">
          <Flex
            ml="4em"
            bg="grey"
            w="8em"
            justifyContent="center"
            color="white"
            borderRadius="20px"
          >
            About we are
          </Flex>
          <Text fontWeight="bolder" ml="1.4em" fontSize="3em ">
            Más gente , <br />
            Mas impacto.
          </Text>
        </Flex>
        <Center ml="15em" mr="4em" height="10em">
          <Divider orientation="vertical" />
        </Center>

        <Flex direction="column">
          <Text fontSize="1.3em" fontWeight="bold">
            Porque juntos, podemos hacer una real diferencia. <br /> Nuestros
            servicios de voluntarios en una variedad de <br />
            roles se adecúan a sus habilidades e interés.
          </Text>
          <Button
            borderRadius="30px"
            mt="1em"
            ml="1em"
            width="50%"
            color="white"
            bg="#004199"
            border="1px solid black"
            alignSelf="flex-start"
            justifySelf="center"
            alignSelf="center"
          >
            Leer más
          </Button>
        </Flex>
      </Flex>
      <Cards />
    </Flex>
  );
};
