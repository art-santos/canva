import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "../../infrastructure/components/organisms/Footer";
import Header from "../../infrastructure/components/organisms/Header";

type LayoutProps = {
  children: ReactNode;
};

//This is our layout and the component responsible for rendering all the default items in the page
//Such as header and footer
const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      margin="0 auto"
      minHeight="100%"
      maxWidth="full"
      transition="0.5s ease-out"
    >
      <Box h="100vh">
        <Header />
        <Box as="main" h="80%">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
