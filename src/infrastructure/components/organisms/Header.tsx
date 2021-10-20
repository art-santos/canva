import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "../atoms/ThemeToggle";

//That's the header of our application. He's also responsible for keeping the theme toogle visible

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      height={"10%"}
      align="center"
      padding={3}
      borderBottom="4px"
      borderColor="purple.500"
    >
      <Heading as="h1" size="md">
        <Link href="/">CANVA</Link>
      </Heading>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
