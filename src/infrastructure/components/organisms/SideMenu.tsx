import { SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import MapFactory from "../utils/SideMenuFactory";

//RightNow, we are just going to use this content for getting everything organized and styled
const SideMenu = () => {
  return (
    <>
      <SimpleGrid
        zIndex={1}
        boxShadow="2xl"
        borderBottomEndRadius="10px"
        h="full"
        w="full"
        display="grid"
        spacingX="40px"
        spacingY="0px"
        spacing="50px"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        rowGap={1}
        padding={8}
      >
        <MapFactory />
      </SimpleGrid>
    </>
  );
};

export default SideMenu;
