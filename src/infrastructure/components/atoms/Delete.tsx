import React from "react";

import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "app/redux/hooks";
import { DELETE_CONTENT } from "app/redux/features/content.slice";

interface ToggleDeleteProps {
  isActive: boolean;
}

const ToggleDelete: React.FC<ToggleDeleteProps> = ({ isActive }) => {
  const dispatch = useAppDispatch();

  /*This button uses isActive to update its state on the window event listeners for deleting the component
with backspace or delete.
*/
  React.useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.keyCode === 8 || e.keyCode === 46) {
        dispatch(DELETE_CONTENT());
      }
    });
  }, [isActive]);

  function handleDelete() {
    dispatch(DELETE_CONTENT());
  }

  return (
    <>
      <IconButton
        colorScheme="red"
        aria-label="delete-toggle"
        icon={<CloseIcon />}
        isRound={false}
        size="sm"
        position="absolute"
        top={-1}
        right={-1}
        onClick={() => {
          handleDelete();
        }}
      ></IconButton>
    </>
  );
};

export default ToggleDelete;
