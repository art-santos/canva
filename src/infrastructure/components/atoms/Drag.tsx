import { IconButton } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { useAppDispatch } from "app/redux/hooks";
import { SET_DRAGGABLE } from "app/redux/features/content.slice";

interface ToggleDragProps {
  isUndraggable: boolean;
  index: number;
}

const ToggleDrag: React.FC<ToggleDragProps> = ({ isUndraggable, index }) => {
  const dispatch = useAppDispatch();

  /*This button is going to use index and isUndraggable. It uses index for finding the array position
  and changing it's state in redux. It also uses isUndraggable to change his icon for view.
  
  */
  return (
    <>
      <IconButton
        colorScheme="whatsapp"
        aria-label="delete-toggle"
        icon={isUndraggable ? <UnlockIcon /> : <LockIcon />}
        isRound={false}
        isActive={true}
        position="absolute"
        bottom="0"
        left="0"
        size="sm"
        onClick={(e) => {
          dispatch(SET_DRAGGABLE({ index: index }));
        }}
      />
    </>
  );
};

export default ToggleDrag;
