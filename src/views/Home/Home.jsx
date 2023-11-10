import {
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Highlight,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import "@splidejs/react-splide/css/skyblue";
import { CardSection } from "./CardSections/CardSection";
import { IconSection } from "./IconSection/IconSection";
import { ProyectosCard } from "./proyectos_card/ProyectosCard";
import { Footer } from "../../components/footer/Footer";
import { TypeAnimation } from "react-type-animation";
import valoresVector from "../../assets/valores_vector.png";
import { InvestmentSection } from "./InvestmentSection/InvestmentSection";
import { Newsletter } from "../../components/newsletter/Newsletter";
import { Banner } from "./Banner/Banner";
import { Faqs } from "../../components/faqs/Faqs";

export const Home = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      alignItems="center"
      justifyContent="space-around"
    >
      <Navbar />
      <Banner />

      <CardSection />
      <IconSection />
      <InvestmentSection />
      <ProyectosCard />
      <Newsletter />
      <Faqs/>
      <Footer />
    </Flex>
  );
};
