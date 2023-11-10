import { Flex, Image, Link, Text } from "@chakra-ui/react";
import icon from "../../assets/favicon.png";
export const Footer = () => {
  const menu1 = [
    {
      id: 1,
      title: "Conocer más",
      src: "",
    },
    {
      id: 2,
      sub: "Ver Proyectos",
      src: "",
    },
    {
      id: 3,
      sub: "Ayuda a emprendedores",
      src: "",
    },
    {
      id: 4,
      sub: "Inversores",
      src: "",
    },
  ];
  const menu2 = [
    {
      id: 1,
      title: "Ayuda",
      src: "",
    },
    {
      id: 2,
      sub: "FAQS",
      src: "",
    },
    {
      id: 3,
      sub: "Contacto",
      src: "",
    },
  ];

  return (
    <Flex
      w="100%"
      h="15em"
      bg="#001d45"
      alignItems="center"
      justifyContent="space-around"
    >
      <Flex w="40%" ml="4em">
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          h="100%"
          w="30%"
        >
          {menu1.map((link) => {
            return (
              <Link fontSize={link.title && "2em"} key={link.id} color="white">
                {link.title || link.sub}{" "}
              </Link>
            );
          })}
        </Flex>

        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          h="100%"
          w="30%"
        >
          {menu2.map((link) => {
            return (
              <Link fontSize={link.title && "2em"} key={link.id} color="white">
                {link.title || link.sub}{" "}
              </Link>
            );
          })}
        </Flex>
      </Flex>
     {/*  <Flex w="20%" h="100%" alignItems="center">
        <Image justifySelf="center" h="50%" src={icon} />
      </Flex> */}

      <Flex
        pr="5em"
        direction="column"
        alignItems="flex-end"
        justifyContent="center"
        h="100%"
        w="40%"
      >
        <Link m="1em" textAlign="right" color="white">
          Política de Cookies
        </Link>
        <Link m="1em" textAlign="right" color="white">
          Política de Privacidad
        </Link>
        <Link m="1em" textAlign="right" color="white">
          Términos y Condiciones
        </Link>
        <Text color="white">Veconomy @2023. Todos los derechos reservados</Text>
      </Flex>
    </Flex>
  );
};
