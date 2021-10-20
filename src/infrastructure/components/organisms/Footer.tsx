import { Flex, Text } from "@chakra-ui/react";

//That's the footer of our application

const Footer = () => {
  return (
    <Flex
      as="footer"
      borderTop="4px"
      height="10%"
      marginBottom="0px"
      borderColor="purple.500"
      boxShadow="inner"
      width="full"
      align="center"
      padding={5}
    >
      <Text color="purple.600">ALCHEMY CANVA - {new Date().getFullYear()}</Text>
    </Flex>
  );
};

export default Footer;
