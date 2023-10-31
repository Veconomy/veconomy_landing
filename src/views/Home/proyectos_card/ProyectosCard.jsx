
import { Button, Flex, Text } from "@chakra-ui/react"
import redtecnologica_bg from "../../../assets/redtecnologica.jpg"

export const ProyectosCard = () => {

    return       <Flex direction="column" alignItems="flex-start"  bgImage={redtecnologica_bg} w="90%" h="25em" m="4em"> 
    <Text mt="1em" ml="1em" fontSize="3em" color="white">Nuestra misión</Text>
    <Text ml="2em"  fontSize="1.5em" color="white">Solucionamos problemas financieros de manera transparente y responsable. <br/>
    Hacemos realidad los sueños de quienes más lo necesitan.</Text>
    <Button mt="4em" borderRadius="30px" alignSelf="center">Ver Proyectos</Button>
    </Flex>
}