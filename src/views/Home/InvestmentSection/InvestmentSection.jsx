import { Flex, Text } from "@chakra-ui/react";
import { InvestmentCard } from "./InvestmentCard/InvestmentCard";
import investment_background from "../../../assets/backprueba.svg"
export const InvestmentSection = () => {
  return (
    <Flex w="100%" h="40em" bgImage={investment_background} alignItems="center" justifyItems="center">
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        w="70%"
      >
        <Text textAlign="center" mb="1em" w="50%" fontSize="2em" color="white" fontWeight="bold">
          Socios de un éxito para un <br /> alto beneficio mutuo de alto <br />{" "}
          impacto social.
        </Text>
        {/* <Text w="50%" color="white"  fontSize="1em">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatem cupiditate praesentium magni vitae sit tempora ex. Quis
          adipisci dolorem nihil optio fuga laudantium tempora tenetur
          necessitatibus, ullam corporis suscipit!
        </Text> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UQV7z3enafA"
          title="Video de YouTube"
          allowFullScreen
        ></iframe>
      </Flex>
      <InvestmentCard/>
    </Flex>
  );
};
