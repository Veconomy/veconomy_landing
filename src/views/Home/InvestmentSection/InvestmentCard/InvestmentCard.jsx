import {  Flex , Text} from "@chakra-ui/react"

 
export const InvestmentCard = () => {

    return <Flex h="25em" bg="white" alignItems="center" justifyContent="flex-start" direction="column" w="20%">
            <Flex alignItems="center" mt=".5em" w="90%" direction="column" justifyContent="center" bg="blue">
                <Text fontSize="1.5em" color="white"  fontWeight="bold">+ 8 %</Text>
                <Text fontSize="1.5em"  color="white" fontWeight="bold">de ganancia en tus <br/> inversiones*</Text>
            </Flex>
        </Flex>
}