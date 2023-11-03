import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import newsletter_background from "../../assets/newsletter_background.png";
export const Newsletter = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="80%"
      h="20em"
      bgImage={newsletter_background}
      m="5em 0"
    >
      <Text color="white" fontSize="4em" mb=".7em">
        ¿Qué información te interesa?
      </Text>

      <Flex w="100%" alignItems="center" justifyContent="space-around">
        <Text color="white" fontSize="1.3em">
          Suscribete a nuestra newsletter y recibiras las <br /> noticias mas
          relevantes del sector cada dos <br /> semanas en tu email. Podrás
          darte de baja de <br /> este servicio cuando lo desees.
        </Text>

        <Flex direction="column" w="30%" h="100%" alignItems="space-around" justifyContent="space-around">
          <Box w="100%">
            <Checkbox mr="3em" color="white" colorScheme="red" defaultChecked>
              Inversión
            </Checkbox>
            <Checkbox color="white" colorScheme="red">Empresas</Checkbox>
          </Box>
          <InputGroup>
            <InputRightAddon p="0" borderRadius="0" bg="#FFFAFB" borderRadius="30px">
              <Input bg="" placeholder="Tu dirección de email"></Input>
              <Button w="10em" bg="black" color="white">Me interesa</Button>
            </InputRightAddon>
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};
