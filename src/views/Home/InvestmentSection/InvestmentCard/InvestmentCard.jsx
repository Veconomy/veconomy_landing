import { Box, Button, Flex, Text } from "@chakra-ui/react";
import "./investmentCard.css"

export const InvestmentCard = () => {
  return (
    <Flex
      h="28em"
      bg="white"
      alignItems="center"
      justifyContent="flex-start"
      direction="column"
      borderRadius="10px"
      w="18%"
      className="investment_card"
    >
      <Flex
        alignItems="center"
        mt=".5em"
        w="90%"
        direction="column"
        justifyContent="center"
        bg="blue"
      >
        <Text fontSize="1.5em" color="white" fontWeight="bold">
          + 8 %
        </Text>
        <Text fontSize="1.5em" color="white" fontWeight="bold">
          de ganancia en tus <br /> inversiones*
        </Text>
      </Flex>
      <Flex mt="2em" w="90%" justifyContent="space-around" alignItems="center">
        <Box>
          <Text fontWeight="bold" fontSize="1em"> RETORNO COMPETITIVO</Text>
          <Text fontSize=".8em">
            Retorno del 8% <br /> inviertes desde 20$
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="1em"> INVERSIONES RÁPIDAS</Text>
          <Text fontSize=".8em">
            Con tu tarjeta o <br /> crypto wallet.
          </Text>
        </Box>
      </Flex>

      <Button bg="#004199" color="white" mt="1em">Invertir Ahora</Button>
      <Text
        justifySelf="flex-start"
        ml="1em"
        fontSize=".7em"
        mt="2em"
        alignSelf="flex-start"
      >
        *Préstamos colaterizados
      </Text>
      <Text justifySelf="flex-start" fontSize=".7em">
        *Hasta 8% de interés anual sobre tu inversión en USD <br /> en el
        momento de la entrega del préstamo a los emprendedores.
      </Text>
    </Flex>
  );
};
