import { Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  const menu1 = [
    {
      title: "Conocer más",
      src: "",
    },
    {
      sub: "Ver Proyectos",
      src: "",
    },
    {
      sub: "Ayuda a emprendedores",
      src: "",
    },
    {
      sub: "Inversores",
      src: "",
    },
  ];
  const menu2 = [
    {
      title: "Ayuda",
      src: "",
    },
    {
      sub: "FAQS",
      src: "",
    },
    {
      sub: "Contacto",
      src: "",
    },
  ];

  return (
    <Flex
      w="100%"
      h="15em"
      bg="#4edfff"
      alignItems="center"
      justifyContent="space-around"
    >
      <Flex w="60%" ml="4em">
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          h="80%"
          w="30%"
        >
          {menu1.map((link) => {
            return <Link color="black">{link.title || link.sub} </Link>;
          })}
        </Flex>

        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          h="80%"
          w="30%"
        >
          {menu2.map((link) => {
            return <Link color="black">{link.title || link.sub} </Link>;
          })}
        </Flex>
      </Flex>

      <Flex
        pl="20em"
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        h="80%"
        w="30%"
      >
        <Link m="1em" textAlign="right" color="black">
          Política de Cookies
        </Link>
        <Link m="1em" textAlign="right" color="black">
          Política de Privacidad
        </Link>
        <Link m="1em" textAlign="right" color="black">
          Términos y Condiciones
        </Link>
        <Text color="black">Veconomy @2023. Todos los derechos reservados</Text>
      </Flex>
    </Flex>
  );
};
