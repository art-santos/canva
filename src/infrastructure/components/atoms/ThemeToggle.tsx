import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //That's a toogle for the theme. He uses default chackra ui theme and icons for setting a color mode and caching this
  return (
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
