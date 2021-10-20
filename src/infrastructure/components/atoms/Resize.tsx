import React from "react";
import { IconButton } from "@chakra-ui/react";
import { LockIcon, UpDownIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "app/redux/hooks";
import { SET_RESIZABLE } from "app/redux/features/content.slice";

interface ToggleResizeProps {
  isResizable: boolean;
  index: number;
}
//This button isn't used in fact. In the end of the project i was having some bugs with the delete function and it.

const ToggleResize: React.FC<ToggleResizeProps> = ({ isResizable, index }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <IconButton
        colorScheme="whatsapp"
        aria-label="delete-toggle"
        icon={isResizable ? <UpDownIcon /> : <LockIcon />}
        isRound={false}
        isActive={true}
        position="absolute"
        bottom="0px"
        left="0px"
        size="xs"
        onClick={() => {
          dispatch(SET_RESIZABLE({ index: index }));
        }}
      />
    </>
  );
};

export default ToggleResize;
